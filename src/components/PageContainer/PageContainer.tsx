import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { GoBackButton } from '../GoBackButton';
import { ToastNotification } from '../ToastNotifcation/ToastNotificationt';

interface Props {
    children: ReactNode;
    title: string;
}
export const PageContainer = ({ children, title }: Props) => {
    return (
        <div className="relative flex flex-row h-screen overflow-x-hidden text-gray-800">
            <Sidebar />
            <div className="w-full flex flex-col pl-18 md:pl-44 lg:pl-56 xl:pl-72 h-full">
                <header className="z-50 bg-gradient-to-r fixed top-0 w-full from-pink-500 to-purple-500 flex min-h-18 h-18 md:min-h-20 md:h-20 px-3 md:px-6 items-center gap-4">
                    <GoBackButton />
                    <h1 className="text-xl text-white font-bold">{title}</h1>
                </header>
                <main
                    id="MAIN-MASTER"
                    className="relative flex-grow w-full p-4 mt-20 md:p-6 md:mt-20 max-w-7xl mx-auto bg-gray-100 overflow-y-auto"
                >
                    {children}
                </main>
            </div>
            <ToastNotification />
        </div>
    );
};
