import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage';
import { CreateBookPage } from './pages/CreateBookPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ReduxProvider } from './store/ReduxProvider';
import { NotFoundPage } from './pages/NotFound';

function App() {
    return (
        <ReduxProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/books/:id" element={<CreateBookPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </ReduxProvider>
    );
}

export default App;
