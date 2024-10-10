import { LucideProps } from 'lucide-react';

type Colors = 'purple' | 'pink' | 'red' | 'blue';

interface Props {
    title: string;
    onClick: () => any;
    disabled?: boolean;
    Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
    type?: 'button' | 'submit' | 'reset' | undefined;
    loading?: boolean;
    primaryColor?: Colors;
    secondaryColor?: Colors;
}
export const PrettyButton = ({
    Icon,
    onClick,
    title,
    loading,
    type = 'button',
    primaryColor = 'purple',
    secondaryColor = 'pink',
}: Props) => {
    const colorMap = {
        purple: {
            from: 'from-purple-500',
            to: 'to-purple-500',
            hover: 'from-purple-600',
            focus: 'focus:ring-purple-500',
            loadingFrom: 'from-purple-300',
            loadingTo: 'to-purple-300',
        },
        pink: {
            from: 'from-pink-500',
            to: 'to-pink-500',
            hover: 'from-pink-600',
            focus: 'focus:ring-pink-500',
            loadingFrom: 'from-pink-300',
            loadingTo: 'to-pink-300',
        },
        red: {
            from: 'from-red-500',
            to: 'to-red-500',
            hover: 'from-red-600',
            focus: 'focus:ring-red-500',
            loadingFrom: 'from-red-300',
            loadingTo: 'to-red-300',
        },
        blue: {
            from: 'from-blue-500',
            to: 'to-blue-500',
            hover: 'from-blue-600',
            focus: 'focus:ring-blue-500',
            loadingFrom: 'from-blue-300',
            loadingTo: 'to-blue-300',
        },
    };

    const primaryClasses = colorMap[primaryColor];
    const secondaryClasses = colorMap[secondaryColor];

    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={`w-full bg-gradient-to-r relative flex items-center justify-center px-6 py-3 overflow-hidden text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 ${
                    primaryClasses.focus
                } focus:ring-opacity-50 transition-all duration-300 ease-in-out ${loading && 'hover:cursor-wait'} `}
            >
                {!loading ? (
                    <>
                        <span
                            className={`absolute inset-0 bg-gradient-to-r ${secondaryClasses.from} ${primaryClasses.to} transition-all duration-300 ease-in-out`}
                        ></span>
                        <span
                            className={`absolute inset-0 bg-gradient-to-r ${primaryClasses.hover} ${secondaryClasses.hover} opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out`}
                        ></span>
                    </>
                ) : (
                    <span
                        className={`absolute inset-0 bg-gradient-to-r ${primaryClasses.loadingFrom} ${secondaryClasses.loadingTo} transition-opacity duration-300 ease-in-out`}
                    ></span>
                )}
                {Icon && <Icon className="relative z-10 w-5 h-5 mr-2 pointer-events-none" />}
                <span className="relative z-10 pointer-events-none">{title}</span>
            </button>
        </div>
    );
};
