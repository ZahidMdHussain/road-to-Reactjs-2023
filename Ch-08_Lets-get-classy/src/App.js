import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';



const App = () => {
    return (
    <>
        <Outlet />
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '/',
                element: <Profile />
            },
            {
                path : '/contact',
                element: <Contact />
            }
        ]
    },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)

