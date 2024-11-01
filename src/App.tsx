import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, Register } from '@/page';
import { ProtectedRoutes } from './utils';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" />
                <Route element={<ProtectedRoutes />}>
                    <Route element={<Home />} path="/" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
