import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <button onClick={handleGoBack}>
            <ArrowLeft className="text-white font-bold" strokeWidth={3} />
        </button>
    );
};
