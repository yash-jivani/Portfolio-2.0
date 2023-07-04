import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className='px-3 md:px-5 mx-auto max-w-[1440px]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
