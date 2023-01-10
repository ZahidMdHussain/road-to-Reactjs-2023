import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '/components/Header.js';
import Main from '/components/Main.js';
import Footer from '/components/Footer.js';

const App = () => {
    return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

