interface PropsInputForm {
    title: string;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    htmlFor: string;
    type: string;
    id: string;
    isRequired: boolean;
}

export const InputForm = ({
    title,
    onChangeValue,
    value,
    htmlFor,
    type,
    id,
    isRequired,
}: PropsInputForm) => {
    return (
        <>
            <label
                className={`${isRequired && !value ? 'text-red-500' : 'text-black'} block pb-1 text-sm font-semibold`}
                htmlFor={htmlFor}>
                {title}
            </label>

            <input
                onChange={onChangeValue}
                className={`mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none ${isRequired && !value ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                type={type}
                id={id}
                value={value}
            />
        </>
    );
};
