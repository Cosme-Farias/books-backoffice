import { InputField } from '@/components/InputField';
import { PageContainer } from '@/components/PageContainer';
import { ResponsiveTable } from '@/components/ResponsiveTable/ResponsiveTable';
import { useUsers } from '@/hooks/useUsers';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
    const [search, setSearch] = useState('');
    const [rol, setRol] = useState('');

    const { count, elements, error, loading, refetch } = useUsers();

    const [page, setPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(1);

    const handlePage = (page: number) => {
        if (page > Math.ceil(count / elementsPerPage)) return;
        if (page <= 0) return;
        setPage(page);
        refetch({ page, search, elementsPerPage });
    };

    const handleElementsPerPage = (elements: number) => {
        setElementsPerPage(elements);
        setPage(1);
        refetch({ page, search, elementsPerPage: elements });
    };

    return (
        <PageContainer title="Listado de usuarios">
            <div className="flex flex-col h-full w-full max-w-7xl mx-auto gap-4  bg-gray-100">
                {/* Filters */}
                <div className="grid grid-cols-8 gap-2">
                    <div className="col-span-2">
                        <div className="relative">
                            <InputField
                                id="search"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                    refetch({ elementsPerPage, page, search: e.target.value });
                                }}
                                placeholder="Buscar usuario..."
                                type="text"
                                value={search}
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Search className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    <div className="relative col-span-2">
                        <select
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 
								${!rol && 'text-gray-400'}
								`}
                            value={rol}
                            onChange={(e) => {
                                setRol(e.target.value);
                                console.log(e.target.value);
                            }}
                        >
                            <option value={''} className="text-gray-400">
                                Filtrar por rol
                            </option>
                            <option className="text-gray-800" value={'Admin'}>
                                Admin
                            </option>
                            <option className="text-gray-800" value={'User'}>
                                User
                            </option>
                        </select>
                    </div>
                    <Link to={'/users/new'} className="col-start-7 col-span-2 ">
                        <button
                            className={`h-full w-full flex justify-center items-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 bg-purple-500`}
                        >
                            Crear
                        </button>
                    </Link>
                </div>
                <ResponsiveTable
                    elements={elements}
                    count={count}
                    entries={['firstName', 'lastName', 'email', 'role']}
                    headers={['Nombre', 'Apellido', 'Email', 'Rol']}
                    actions={['edit', 'delete', 'other']}
                    elementsPerPage={elementsPerPage}
                    handleElementsPerPage={handleElementsPerPage}
                    handlePage={handlePage}
                    page={page}
                />
            </div>
        </PageContainer>
    );
};
