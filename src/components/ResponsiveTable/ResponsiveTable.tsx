import { Edit, MoreVertical, Trash2 } from 'lucide-react';

interface Props<T> {
    elements: T[];
    count: number;
    entries: Array<keyof T>;
    page: number;
    handlePage: (page: number) => void;
    elementsPerPage: number;
    handleElementsPerPage: (number: number) => void;
    headers?: string[];
    actions?: Actions[];
    loading?: boolean;
    action1?: (element: T) => any;
}
type Actions = 'edit' | 'delete' | 'other';

export const ResponsiveTable = <T extends {}>({
    actions,
    elements,
    entries,
    headers,
    count,
    elementsPerPage,
    handleElementsPerPage,
    handlePage,
    page,
    loading,
    action1,
}: Props<T>) => {
    console.log({ count, elementsPerPage });
    return (
        <>
            <div className="w-full h-full bg-white shadow-md rounded-md overflow-y-auto">
                <table className="min-w-full leading-normal overflow-y-auto">
                    <thead className="sticky top-0 bg-gray-400 z-10">
                        <tr>
                            {entries.map((entry, i) => (
                                <th
                                    key={String(entry)}
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    {headers ? headers[i] : String(entry)}
                                </th>
                            ))}
                            {actions && (
                                <th
                                    key="actions"
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Acciones
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="h-full">
                        {loading ? (
                            <div></div>
                        ) : (
                            // ? Array(elementsPerPage < 5 ? elementsPerPage : 5)
                            //       .fill(null)
                            //       .map((_, index) => (
                            //           <tr key={index}>
                            //               <td className="px-6 py-4 whitespace-nowrap">
                            //                   <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                            //               </td>
                            //               <td className="px-6 py-4 whitespace-nowrap">
                            //                   <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                            //               </td>
                            //               <td className="px-6 py-4 whitespace-nowrap">
                            //                   <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
                            //               </td>
                            //               <td className="px-6 py-4 whitespace-nowrap">
                            //                   <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            //               </td>
                            //               <td className="px-6 py-4 whitespace-nowrap">
                            //                   <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            //               </td>
                            //           </tr>
                            //       ))
                            elements.map((element, index) => (
                                <tr key={index}>
                                    {entries.map((entry) => (
                                        <td
                                            key={String(entry)}
                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            {element[entry] !== undefined && element[entry] !== null
                                                ? String(element[entry])
                                                : '-'}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center space-x-4">
                                                {actions.map((action) => {
                                                    if (action === 'edit') {
                                                        return (
                                                            <button
                                                                key="edit"
                                                                className="text-blue-500 hover:text-blue-600"
                                                                onClick={() => {
                                                                    if (typeof action1 !== 'function') return;
                                                                    action1(element);
                                                                }}
                                                            >
                                                                <Edit size={18} />
                                                            </button>
                                                        );
                                                    }
                                                    if (action === 'delete') {
                                                        return (
                                                            <button
                                                                key="delete"
                                                                className="text-red-500 hover:text-red-600"
                                                                onClick={() => {
                                                                    /* lógica para eliminar */
                                                                }}
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        );
                                                    }
                                                    if (action === 'other') {
                                                        return (
                                                            <button
                                                                key="other"
                                                                className="text-gray-500 hover:text-gray-600"
                                                                onClick={() => {
                                                                    /* lógica para otra acción */
                                                                }}
                                                            >
                                                                <MoreVertical size={18} />
                                                            </button>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="h-20 shadow-md rounded-md bg-white border-t grid grid-cols-12 xs:flex-row items-center xs:justify-between px-5">
                <span className="col-span-2 text-xs xs:text-sm text-gray-900">
                    {`${count === 0 ? 0 : (page - 1) * elementsPerPage + 1} - ${Math.min(
                        count,
                        page * elementsPerPage
                    )} de ${count} resultados`}
                </span>

                <div className="col-span-8 gap-4 flex justify-center items-center">
                    <div className="flex gap-2">
                        <button
                            className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePage(1)}
                            // disabled={currentPage === 1}
                        >
                            &#171;
                        </button>
                        <button
                            className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePage(page - 1)}
                            // disabled={currentPage === 1}
                        >
                            &#8249;
                        </button>
                    </div>
                    <span className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
                        {/* Página {currentPage} de {totalPages} */}
                        {Array.from({ length: Math.ceil(count / elementsPerPage) }).map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <button
                                    className={`${page === pageNumber && 'text-purple-500'}`}
                                    key={i}
                                    onClick={() => handlePage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </span>
                    <div className="flex gap-2">
                        <button
                            className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePage(page + 1)}
                            // disabled={currentPage === totalPages}
                        >
                            &#8250;
                        </button>
                        <button
                            className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePage(count * elementsPerPage)}
                            // disabled={currentPage === totalPages}
                        >
                            &#187;
                        </button>
                    </div>
                </div>
                <select className="col-span-2" onChange={(e) => handleElementsPerPage(Number(e.target.value))}>
                    <option value={1}>1 por página</option>
                    <option value={2}>2 por página</option>
                    <option value={3}>3 por página</option>
                    <option value={4}>4 por página</option>
                </select>
                {/* <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Anterior
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Siguiente
                    </button>
                </div> */}
            </div>
        </>
    );
};
