import { InputForm } from '@/components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name === '' || pass === '') {
            setError(true);
            return;
        }
        console.log(name, pass);
        setError(false);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black py-3">
            <div className="mx-8 w-[450px] rounded-3xl bg-white px-4 py-10 shadow sm:p-10 md:mx-0">
                <h1 className="block text-center text-2xl font-semibold text-gray-600">
                    Register
                </h1>
                <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <InputForm
                            title={error ? 'Username Require ' : 'Username'}
                            onChangeValue={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setName(e.target.value)}
                            value={name}
                            htmlFor={'name'}
                            type={'text'}
                            id={'name'}
                            isRequired={error}
                        />

                        <InputForm
                            title={error ? 'Password Require ' : 'Password'}
                            onChangeValue={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setPass(e.target.value)}
                            value={pass}
                            htmlFor={'password'}
                            type={'password'}
                            id={'password'}
                            isRequired={error}
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                            type="submit">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="w-1/5 border-b md:w-1/4 dark:border-gray-600" />
                    <Link
                        to={'/login'}
                        className="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
                        or sign in
                    </Link>
                    <span className="w-1/5 border-b md:w-1/4 dark:border-gray-400" />
                </div>
            </div>
        </div>
    );
};
