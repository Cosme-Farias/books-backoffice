import { BookText, Home, LogOut, Settings, Users } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

export const Sidebar = () => {
    const menuItems = [
        { icon: Home, text: 'Inicio', href: '/' },
        { icon: Users, text: 'Usuarios', href: '/users' },
        { icon: BookText, text: 'Libros', href: '/books' },
        { icon: Settings, text: 'Configuración', href: '/settings' },
    ];

    return (
        <>
            <MobileMenu menuItems={menuItems} />
            <aside
                className={`fixed left-0 md:flex md:w-44 lg:w-56 xl:w-72 bg-white z-50 h-full  flex-col transition-all hidden `}
            >
                <div
                    className={`flex w-full justify-center items-center h-20 bg-gradient-to-r from-purple-500 to-pink-500 ${'px-4'} transition-all`}
                >
                    <Link to={'/'}>
                        <h1 className={`w-48 text-2xl font-bold text-white text-left transition-all overflow-hidden`}>
                            Books
                        </h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-grow py-6 border-r overflow-hidden">
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:bg-purple-100 hover:cursor-pointer transition-colors">
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `${isActive && 'bg-purple-200'} flex gap-2 h-10 items-center`
                                    }
                                >
                                    <item.icon className="min-h-6 min-w-6 text-purple-600 ml-6" />
                                    <span className={`overflow-hidden transition-all duration-100`}>{item.text}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logout button */}
                <div className="mt-auto flex border-t border-gray-200 border-r overflow-hidden">
                    <button className="flex py-6 gap-2 items-center text-gray-700 hover:text-purple-600 transition-colors">
                        <LogOut className="min-h-6 min-w-6 ml-6" />
                        <span className={` overflow-hidden transition-all duration-100 whitespace-nowrap`}>
                            Cerrar sesión
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
};
