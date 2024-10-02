import { InputField } from '@/components/InputField';
import { PageContainer } from '@/components/PageContainer';
import { Book } from '@/interfaces/book.interface';
import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { PrettyButton } from '@/components/PrettyButton';

export const CreateBookPage = () => {
    const [book, setBook] = useState<Book>({
        author: '',
        category: '',
        isbn: '',
        pages: '',
        publicationDate: '',
        synopsis: '',
        title: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const editBook = (key: keyof Book, value: Book[keyof Book]) => {
        console.log(value);
        setBook((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <PageContainer title="Agregar libro">
            <form className="flex flex-col gap-4">
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
                <InputField
                    id="author"
                    label="Autor"
                    onChange={(e) => editBook('author', e.target.value)}
                    placeholder="Autor..."
                    type="text"
                    value={book.author}
                />
                <InputField
                    id="genre"
                    label="Género"
                    onChange={(e) => editBook('category', e.target.value)}
                    placeholder="Esoterismo... "
                    type="text"
                    value={book.category}
                />
                {/* <div className="flex flex-row gap-6">
                    <div className="w-1/2"> */}
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
                {/* <div className="w-1/2"> */}
                <div className="w-full">
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
                {/* 
                </div> */}
                {/*
                 */}
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
                <div>
                    <PrettyButton
                        Icon={Download}
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                            }, 3000);
                        }}
                        title="Guardar"
                        key="saveButton"
                        loading={loading}
                        primaryColor="purple"
                        secondaryColor="pink"
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
