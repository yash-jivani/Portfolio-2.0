import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className='px-2 lg:px-7 mx-auto max-w-[1440px]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
