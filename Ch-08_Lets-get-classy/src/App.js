import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from "./components/Profile"



const App = () => {
    return (
    <>
        <Profile />
    </>
    );
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

