import { InputField } from '@/components/InputField';
import { PageContainer } from '@/components/PageContainer';
import { PrettyButton } from '@/components/PrettyButton';
import { useAppDispatch } from '@/store/hooks';
import { closeToast, showToast } from '@/store/slices/toastSlice';
import { NewUser } from '@/types/user';
import { handleError } from '@/utils/errorHandler';
import { Download, X } from 'lucide-react';
import { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@/services/models/users';

export const CreateUserPage = () => {
    const [user, setUser] = useState<NewUser>({ firstName: '', lastName: '', email: '', role: 'admin' });
    const [created, setCreated] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const editUser = (key: keyof NewUser, value: NewUser[keyof NewUser]) => {
        console.log(value);
        setUser((prev) => ({ ...prev, [key]: value }));
    };

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            await createUser(user);
            setCreated(true);
            dispatch(showToast({ message: '¡Usuario creado!', type: 'success' }));
        } catch (error) {
            const message = handleError(error);
            console.log(message);
            dispatch(showToast({ message, type: 'error' }));
        } finally {
            setTimeout(() => {
                dispatch(closeToast());
            }, 3000);
            setLoading(false);
        }
    };

    const reset = () => {
        setUser({ email: '', firstName: '', lastName: '', role: 'admin' });
        setCreated(false);
    };

    return (
        <PageContainer title="Agregar usuario">
            {created && (
                <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-40 bg-gray-100 text-center">
                    <div className="bg-white w-2/3 max-w-lg flex flex-col justify-center items-center p-6 rounded-md gap-10">
                        <div className="flex flex-col justify-center items-center">
                            <CircleCheckBig size="50" color="#4caf50" />
                            <h3 className="text-3xl font-semibold">¡Usuario creado con éxito</h3>
                        </div>
                        <p className="text-lg text-gray-600">
                            Se creó correctamente el usuario <span className="font-medium">{user.email}</span>. La
                            primera vez debe ingresar con una contraseña a elección. Luego deberá ingresar siempre con
                            la contraseña elegida.
                        </p>
                        <div className="flex flex-col gap-4">
                            <PrettyButton
                                title="Ver usuarios"
                                onClick={() => {
                                    navigate('/users');
                                }}
                            />
                            <PrettyButton
                                title="Crear otro usuario"
                                onClick={() => {
                                    reset();
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
            <form onSubmit={submit} className="flex flex-col h-full gap-4">
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <InputField
                            id="name"
                            label="Nombre"
                            onChange={(e) => editUser('firstName', e.target.value)}
                            placeholder="John"
                            type="text"
                            value={user.firstName}
                        />
                    </div>
                    <div className="w-1/2">
                        <InputField
                            id="lastName"
                            label="Apellido"
                            onChange={(e) => editUser('lastName', e.target.value)}
                            placeholder="Doe"
                            type="text"
                            value={user.lastName}
                        />
                    </div>
                </div>
                <div className="flex gap-4 items-end">
                    <div className="w-1/2">
                        <InputField
                            id="email"
                            label="Email"
                            onChange={(e) => editUser('email', e.target.value)}
                            placeholder="newuser@mail.com"
                            type="email"
                            value={user.email}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Rol</label>
                        <select
                            className={`w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 
								${!user.role && 'text-gray-400'}
								`}
                            value={user.role}
                            onChange={(e) => {
                                editUser('role', e.target.value);
                            }}
                        >
                            <option className="text-gray-800" value={'admin'}>
                                Admin
                            </option>
                            <option className="text-gray-800" value={'panel'}>
                                Panel
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex-grow"></div>
                <PrettyButton
                    Icon={Download}
                    onClick={() => {}}
                    title="Guardar"
                    key="saveButton"
                    loading={loading}
                    primaryColor="purple"
                    secondaryColor="pink"
                    disabled={false}
                    type="submit"
                />
                <PrettyButton
                    Icon={X}
                    onClick={() => {}}
                    title="Cancelar"
                    key="cancelButton"
                    loading={loading}
                    primaryColor="red"
                    secondaryColor="pink"
                />
            </form>
        </PageContainer>
    );
};
