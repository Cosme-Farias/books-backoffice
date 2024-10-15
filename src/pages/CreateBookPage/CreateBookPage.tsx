import { InputField } from '@/components/InputField';
import { PageContainer } from '@/components/PageContainer';
import { Book } from '@/interfaces/book.interface';
import { FormEvent, useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { PrettyButton } from '@/components/PrettyButton';
import { useParams } from 'react-router-dom';
import { createBook, fetchBookById, updateBook } from '@/services/models/books';
import { handleError } from '@/utils/errorHandler';
import { useAppDispatch } from '@/store/hooks';
import { showToast } from '@/store/slices/toastSlice';

export const CreateBookPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id === 'new' || !id) return;
        const fetch = async () => {
            try {
                const response = await fetchBookById(id);
                setBook({ ...response, publicationDate: response.publicationDate.split('T')[0] });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetch();
    }, []);
    const [book, setBook] = useState<Book>({
        author: '',
        category: '',
        isbn: '',
        pages: '',
        publicationDate: '',
        synopsis: '',
        title: '',
    });
    const [loading, setLoading] = useState(false);

    const editBook = (key: keyof Book, value: Book[keyof Book]) => {
        console.log(value);
        setBook((prev) => ({ ...prev, [key]: value }));
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (book._id) {
                await updateBook(book);
            } else {
                await createBook(book);
            }
            console.log('paso');
            dispatch(showToast({ message: 'Libro actualizado', type: 'success' }));
        } catch (error) {
            const errorMessage = handleError(error);
            dispatch(showToast({ message: errorMessage, type: 'error' }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageContainer title="Agregar libro">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 overflow-auto px-2">
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <InputField
                            id="ISBN"
                            label="ISBN"
                            onChange={(e) => editBook('isbn', e.target.value)}
                            placeholder="978-950-0000-00-0"
                            type="text"
                            value={book.isbn}
                        />
                    </div>
                    <div className="w-1/2">
                        <InputField
                            id="title"
                            label="Título"
                            onChange={(e) => editBook('title', e.target.value)}
                            placeholder="Mi libro..."
                            type="text"
                            value={book.title}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <InputField
                            id="author"
                            label="Autor"
                            onChange={(e) => editBook('author', e.target.value)}
                            placeholder="Autor..."
                            type="text"
                            value={book.author}
                        />
                    </div>
                    <div className="w-1/2">
                        <InputField
                            id="genre"
                            label="Género"
                            onChange={(e) => editBook('category', e.target.value)}
                            placeholder="Esoterismo... "
                            type="text"
                            value={book.category}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
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
                            Publicación
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
                <div className="w-full">
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
                <div className="flex-grow"></div>

                <div>
                    <PrettyButton
                        Icon={Download}
                        onClick={() => {}}
                        title="Guardar"
                        key="saveButton"
                        loading={loading}
                        primaryColor="purple"
                        secondaryColor="pink"
                        type="submit"
                    />
                </div>
                <div>
                    <PrettyButton
                        Icon={X}
                        onClick={() => {}}
                        title="Cancelar"
                        key="cancelButton"
                        loading={loading}
                        primaryColor="red"
                        secondaryColor="pink"
                    />
                </div>
            </form>
        </PageContainer>
    );
};
