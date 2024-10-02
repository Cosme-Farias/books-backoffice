import { Bookform } from '@/components/BookForm';
import { PageContainer } from '@/components/PageContainer';
import { useBooks } from '@/hooks/useBooks';
import { Book } from '@/interfaces/book.interface';
import { deleteBook } from '@/services/models/books';
import { useState } from 'react';

export const BooksPage = () => {
    const { elements, refetch } = useBooks();

    const [modal, setModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book>();

    const onCloseModal = () => {
        setModal(false);
        setSelectedBook(undefined);
        refetch();
    };

    return (
        <PageContainer title="Listado de libros">
            <div className="flex flex-col bg-red-200 w-full">
                <button onClick={() => setModal(true)} className="p-4 bg-pink-500 text-white">
                    crear libro
                </button>
                <div className="space-y-6">
                    {elements.map((book) => {
                        return (
                            <div className="flex flex-row gap-4">
                                <span>{book.title}</span>
                                <button
                                    className="p-4 bg-orange-500 text-white"
                                    onClick={() => {
                                        setModal(true);
                                        setSelectedBook(book);
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={async () => {
                                        await deleteBook(book);
                                        refetch();
                                    }}
                                    className="p-4 bg-red-500 text-white"
                                >
                                    Borrar
                                </button>
                            </div>
                        );
                    })}
                </div>
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
