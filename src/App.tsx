import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home } from '@/page';
import { ProtectedRoutes } from './utils';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
