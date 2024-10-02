import { useAppSelector } from '@/store/hooks';
import { ChevronLeft, ChevronRight, LogOut, LucideProps } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import useToggleDrawer from './hooks/useToggleDrawer';

interface Props {
    menuItems: {
        icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
        text: string;
        href: string;
    }[];
}
export const MobileMenu = ({ menuItems }: Props) => {
    const { isOpen } = useAppSelector((state) => state.drawer);

    const toggleDrawer = useToggleDrawer();

    return (
        <>
            {/* SHADOW */}
            <div
                onClick={toggleDrawer}
                className={`${
                    isOpen ? 'opacity-50 z-40' : 'opacity-0 -z-10'
                } absolute inset-0 bg-black   transition-all md:hidden`}
            ></div>

            {/* SIDEBAR */}
            <aside
                className={`${
                    isOpen ? 'w-56' : 'w-18'
                }  min-w-16 fixed top-0 left-0 bg-white z-50 h-full flex flex-col transition-all md:hidden`}
            >
                <div
                    className={`flex w-full justify-center items-center h-18 bg-gradient-to-r from-purple-500 to-pink-500 ${
                        isOpen ? 'px-4' : 'px-0'
                    } transition-all`}
                >
                    <h1
                        className={`${
                            isOpen ? 'w-48' : 'w-0'
                        } text-2xl font-bold text-white text-left transition-all overflow-hidden`}
                    >
                        Books
                    </h1>
                    <button className="p-2" onClick={toggleDrawer}>
                        {isOpen ? (
                            <ChevronLeft className="h-6 w-6 text-white" />
                        ) : (
                            <ChevronRight className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-grow py-6 border-r overflow-hidden">
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:bg-purple-100 hover:cursor-pointer transition-colors">
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `${isActive && 'bg-purple-200'} flex h-10 items-center pl-6`
                                    }
                                >
                                    <item.icon className="min-h-6 min-w-6 text-purple-600" />
                                    <span
                                        className={`ml-2 ${
                                            !isOpen && 'invisible'
                                        } overflow-hidden transition-all duration-100`}
                                    >
                                        {item.text}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logout button */}
                <div className="mt-auto flex border-t border-gray-200 border-r overflow-hidden">
                    <button className="flex py-6 gap-2 items-center text-gray-700 hover:text-purple-600 transition-colors">
                        <LogOut className="min-h-6 min-w-6 ml-6" />
                        <span
                            className={`${
                                !isOpen && 'invisible'
                            } overflow-hidden transition-all duration-100 whitespace-nowrap`}
                        >
                            Cerrar sesión
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
};
