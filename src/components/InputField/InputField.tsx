interface Props {
    id: string;
    label: string;
    type: string;
    value: string | number | undefined;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputField = ({ id, label, onChange, placeholder, type, value, required }: Props) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="text-sm font-medium text-gray-700 block mb-2">
                {label}
            </label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                id={id}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={placeholder}
                autoComplete={id}
                required={required}
            />
        </div>
    );
};
