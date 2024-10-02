import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { GoBackButton } from '../GoBackButton';

interface Props {
    children: ReactNode;
    title: string;
}
export const PageContainer = ({ children, title }: Props) => {
    return (
        <div className="relative flex flex-row h-screen overflow-x-hidden">
            <Sidebar />
            <div className="w-full flex flex-col pl-18 md:pl-0">
                <header className="bg-gradient-to-r from-pink-500 to-purple-500 flex min-h-18 h-18 px-3 md:px-6 items-center gap-4">
                    <GoBackButton />
                    <h1 className="text-xl text-white font-bold">{title}</h1>
                </header>
                <main className="h-full w-full p-4 md:p-6 max-w-7xl mx-auto overflow-y-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};
