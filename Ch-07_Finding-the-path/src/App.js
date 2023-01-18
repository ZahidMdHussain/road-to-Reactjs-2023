import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Error from './components/Error.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () => {
    return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />,
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)

