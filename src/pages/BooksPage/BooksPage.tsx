import { Bookform } from '@/components/BookForm';
import { PageContainer } from '@/components/PageContainer';
import { ResponsiveTable } from '@/components/ResponsiveTable/ResponsiveTable';
import { useBooks } from '@/hooks/useBooks';
import { Book } from '@/interfaces/book.interface';
import { useState } from 'react';

export const BooksPage = () => {
    const { elements, count, refetch } = useBooks();

    const [modal, setModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book>();
    const [page, setPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(1);

    const handlePage = (page: number) => {
        if (page > count * elementsPerPage) return;
        if (page <= 0) return;

        setPage(page);
    };

    const handleElementsPerPage = (elements: number) => {
        setElementsPerPage(elements);
        setPage(1);
    };

    const onCloseModal = () => {
        setModal(false);
        setSelectedBook(undefined);
        refetch();
    };

    return (
        <PageContainer title="Listado de libros">
            <div className="flex flex-col h-full w-full max-w-7xl mx-auto gap-4  bg-gray-100">
                {/* <button onClick={() => setModal(true)} className="p-4 bg-pink-500 text-white">
                    crear libro
                </button> */}
                <ResponsiveTable
                    elements={elements}
                    count={count}
                    entries={['isbn', 'title', 'author', 'category']}
                    headers={['isbn', 'Título', 'Autor', 'Categoría']}
                    actions={['edit', 'delete', 'other']}
                    page={page}
                    handlePage={handlePage}
                    elementsPerPage={elementsPerPage}
                    handleElementsPerPage={handleElementsPerPage}
                />

                {modal && (
                    <Bookform
                        title={selectedBook ? 'Editar libro' : 'Agregar libro'}
                        onClose={onCloseModal}
                        selectedBook={selectedBook}
                    />
                )}
            </div>
        </PageContainer>
    );
};
