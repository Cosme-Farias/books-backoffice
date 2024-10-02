import { useState } from 'react';
import { InputField } from '../InputField';
import { Book } from '@/interfaces/book.interface';
import { createBook, updateBook } from '@/services/models/books';
import { handleError } from '@/utils/errorHandler';
interface Props {
    title: string;
    onClose: () => void;
    selectedBook?: Book;
}
export const Bookform = ({ title, onClose, selectedBook }: Props) => {
    const [book, setBook] = useState<Book>(
        selectedBook || {
            author: '',
            category: '',
            isbn: '',
            pages: '',
            publicationDate: '',
            synopsis: '',
            title: '',
        }
    );
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const editBook = (key: keyof Book, value: Book[keyof Book]) => {
        console.log(value);
        setBook((prev) => ({ ...prev, [key]: value }));
    };

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            if (!book._id) {
                await createBook(book);
            }
            await updateBook(book);
            onClose();
        } catch (error) {
            const message = handleError(error);
            setError(message);
        } finally {
            setTimeout(() => {
                setError('');
            }, 3000);
            setLoading(false);
        }
    };

    return (
        <div
            className="absolute top-0 right-0 min-h-screen w-screen bg-[#00000020] flex justify-center items-center"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
                <form onSubmit={submit} className="space-y-6">
                    <div className="flex flex-row gap-6">
                        <InputField
                            id="ISBN"
                            label="ISBN"
                            onChange={(e) => editBook('isbn', e.target.value)}
                            placeholder="978-950-0000-00-0"
                            type="text"
                            value={book.isbn}
                        />
                        <InputField
                            id="title"
                            label="Título"
                            onChange={(e) => editBook('title', e.target.value)}
                            placeholder="Mi libro..."
                            type="text"
                            value={book.title}
                        />
                    </div>
                    <div className="flex flex-row gap-6">
                        <InputField
                            id="author"
                            label="Autor"
                            onChange={(e) => editBook('author', e.target.value)}
                            placeholder="Autor..."
                            type="text"
                            value={book.author}
                        />
                        <InputField
                            id="category"
                            label="Categoría"
                            onChange={(e) => editBook('category', e.target.value)}
                            placeholder="Esoterismo... "
                            type="text"
                            value={book.category}
                        />
                    </div>
                    <div className="flex flex-row gap-6">
                        <div className="w-1/2">
                            <InputField
                                id="pages"
                                label="Páginas"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const numericValue = value === '' ? '' : !isNaN(Number(value)) ? Number(value) : '';
                                    editBook('pages', numericValue);
                                }}
                                placeholder="99"
                                type="number"
                                value={book.pages}
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="publicationDate" className="text-sm font-medium text-gray-700 block mb-2">
                                Fecha de publicación
                            </label>
                            <input
                                value={book.publicationDate}
                                onChange={(e) => editBook('publicationDate', e.target.value)}
                                type={'date'}
                                id="publicationDate"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                // placeholder={placeholder}
                                // autoComplete={id}
                                // required={required}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="synopsis" className="text-sm font-medium text-gray-700 block mb-2">
                            Sinopsis
                        </label>
                        <textarea
                            id="synopsis"
                            value={book.synopsis}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onChange={(e) => editBook('synopsis', e.target.value)}
                        ></textarea>
                    </div>
                    {error && (
                        <div className="h-5">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}
                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className={`
								w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors
								${loading ? '!bg-purple-400 !hover:bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'}
								`}
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
