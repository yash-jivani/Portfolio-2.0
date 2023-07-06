import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    once: false,
});

const App = () => {
    return (
        <div className='px-4 md:px-5 mx-auto max-w-[1440px]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
