import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(email, pass);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black py-3">
            <div className="mx-8 w-[450px] rounded-3xl bg-white px-4 py-10 shadow sm:p-10 md:mx-0">
                <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center space-x-5"></div>
                    <div className="mt-5">
                        <label
                            className="block pb-1 text-sm font-semibold text-gray-600"
                            htmlFor="login">
                            Username
                        </label>
                        <input
                            onChange={(e: any) => setEmail(e.target.value)}
                            className="mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="login"
                            value={email}
                        />
                        <label
                            className="block pb-1 text-sm font-semibold text-gray-600"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e: any) => setPass(e.target.value)}
                            className="mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            value={pass}
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                            type="submit">
                            Log in
                        </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="w-1/5 border-b md:w-1/4 dark:border-gray-600"></span>
                        <button className="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
                            or sign up
                        </button>
                        <span className="w-1/5 border-b md:w-1/4 dark:border-gray-400"></span>
                    </div>
                </form>
            </div>
        </div>
    );
};
