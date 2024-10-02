import { InputField } from '@/components/InputField';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import { setBearerToken } from '@/services/api';
import { storeSession } from '@/services/localStorage';
import { login } from '@/services/session';
import { handleError } from '@/utils/errorHandler';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from './hooks/useLogin';

export const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const setSession = useLogin();

    const handleCredentials = (key: 'email' | 'password', value: string) => {
        setCredentials((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            setLoading(true);
            const session = await login(credentials);

            setBearerToken(session.token);
            storeSession(session);
            setSession(session);
        } catch (error) {
            const message = handleError(error);
            setError(message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField
                        id="email"
                        label="Correo Electrónico"
                        onChange={(e) => handleCredentials('email', e.target.value)}
                        value={credentials.email}
                        type="email"
                        placeholder="tu@ejemplo.com"
                        key="email"
                    />
                    <PasswordInput
                        autocomplete="password"
                        id="password"
                        onChange={(e) => handleCredentials('password', e.target.value)}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        value={credentials.password}
                        key="password"
                    />
                    <div className="h-5">
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className={`
								w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors
								${loading ? '!bg-purple-400 !hover:bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'}
								`}
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                    <div>
                        <Link className="text-sm text-purple-600 hover:text-purple-500" to={`/register`}>
                            ¿Todavía no tenes una cuenta? Registrate
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
