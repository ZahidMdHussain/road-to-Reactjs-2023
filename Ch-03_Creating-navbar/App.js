import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "/components/Navbar.js"


const App =() => (
    <Navbar />
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);