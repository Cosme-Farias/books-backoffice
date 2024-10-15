import { Bookform } from '@/components/BookForm';
import { PageContainer } from '@/components/PageContainer';
import { ResponsiveTable } from '@/components/ResponsiveTable/ResponsiveTable';
import { useBooks } from '@/hooks/useBooks';
import { Book } from '@/interfaces/book.interface';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const BooksPage = () => {
    const navigate = useNavigate();
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

    const onEdit = (book: Book) => {
        navigate(`/books/${book._id}`);
    };

    return (
        <PageContainer title="Listado de libros">
            <div className="flex flex-col h-full w-full max-w-7xl mx-auto gap-4  bg-gray-100">
                <div className="grid grid-cols-8 gap-2">
                    <Link to={'/books/new'} className="col-start-7 col-span-2 ">
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
                    entries={['isbn', 'title', 'author', 'category']}
                    headers={['isbn', 'Título', 'Autor', 'Categoría']}
                    actions={['edit', 'delete', 'other']}
                    page={page}
                    handlePage={handlePage}
                    elementsPerPage={elementsPerPage}
                    handleElementsPerPage={handleElementsPerPage}
                    action1={onEdit}
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
