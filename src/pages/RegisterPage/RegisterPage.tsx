import { InputField } from '@/components/InputField';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import { register } from '@/services/session';
import { handleError } from '@/utils/errorHandler';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '', repeatedPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleCredentials = (key: 'email' | 'password' | 'repeatedPassword', value: string) => {
        setCredentials((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatedPasswordVisibility = () => {
        setShowRepeatedPassword(!showRepeatedPassword);
    };

    const clearError = () => {
        setTimeout(() => {
            setError('');
        }, 3000);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { email, password, repeatedPassword } = credentials;

            if (!email || !password || !repeatedPassword) {
                throw new Error('Completa todos los campos');
            }
            if (password !== repeatedPassword) {
                throw new Error('Las contraseñas no coinciden');
            }

            const response = await register(credentials);

            if (response.success) {
                navigate('/login');
            } else {
                throw new Error(response.message || 'Error en el registro');
            }
        } catch (error: unknown) {
            const message = handleError(error);
            setError(message);
        } finally {
            setLoading(false);
            clearError();
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Registrarse</h2>
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
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
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        value={credentials.password}
                        onChange={(e) => handleCredentials('password', e.target.value)}
                        key="password"
                        id="password"
                        autocomplete="password"
                    />
                    <PasswordInput
                        showPassword={showRepeatedPassword}
                        togglePasswordVisibility={toggleRepeatedPasswordVisibility}
                        value={credentials.repeatedPassword}
                        onChange={(e) => handleCredentials('repeatedPassword', e.target.value)}
                        key="repeated-password"
                        id="repeated-password"
                        autocomplete="new-password"
                        repeat
                    />
                    <div className="h-5">
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                    <div>
                        <button
                            // disabled={loading}
                            type="submit"
                            className={`w-full flex justify-center py-2
								 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 
								hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
								${loading && '!bg-purple-400 !hover:bg-purple-400'}
								`}
                        >
                            Crear cuenta
                        </button>
                    </div>
                    <div>
                        <Link className="text-sm text-purple-600 hover:text-purple-500" to={`/login`}>
                            ¿Ya tenés una cuenta? Iniciá sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
