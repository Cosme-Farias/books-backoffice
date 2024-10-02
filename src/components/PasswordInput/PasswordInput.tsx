import { EyeIcon } from '../EyeIcon';
import { EyeOffIcon } from '../EyeOffIcon';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPassword: boolean;
    togglePasswordVisibility: () => void;
    id: string;
    autocomplete: 'password' | 'new-password';
    repeat?: boolean;
}

export const PasswordInput = ({
    value,
    onChange,
    showPassword,
    togglePasswordVisibility,
    repeat,
    id,
    autocomplete,
}: PasswordInputProps) => {
    return (
        <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
                {repeat ? 'Repite la contraseña' : 'Contraseña'}
            </label>
            <div className="relative">
                <input
                    value={value}
                    onChange={onChange}
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="********"
                    required
                    autoComplete={autocomplete}
                />
                <button
                    className="absolute inset-y-0 right-2"
                    type="button"
                    onClick={togglePasswordVisibility}
                    tabIndex={-1}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                    {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                    )}
                </button>
            </div>
        </div>
    );
};
