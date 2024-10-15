import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeToast } from '@/store/slices/toastSlice';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { useEffect } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

const icons: Record<ToastType, JSX.Element> = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
};

const bgColors: Record<ToastType, string> = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
};

export function ToastNotification() {
    const { isVisible, message, type } = useAppSelector((state) => state.toast);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                dispatch(closeToast());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, dispatch]);

    return (
        <div
            className={`z-50 fixed bottom-5 right-5 flex items-center p-4 mb-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                bgColors[type]
            } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                {icons[type]}
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-white hover:text-gray-200 hover:bg-gray-800/20"
                onClick={() => dispatch(closeToast())}
                aria-label="Cerrar"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
    );
}
