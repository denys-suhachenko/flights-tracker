import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/Homepage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
