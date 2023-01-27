import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Error from './components/Error.js';
import Contact from './components/Contact';
import Help from './components/Help';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SelectResturant from './components/SelectResturant';
const About = lazy(() => import('./components/About'))


const App = () => {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: 'restaurants/:id',
                element: <SelectResturant />
            }

        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
