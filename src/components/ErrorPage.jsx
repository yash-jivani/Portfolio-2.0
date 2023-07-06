import React from "react";
import { Link } from "react-router-dom";
import { BsFileEarmarkBreak } from "react-icons/bs";
import { links } from "./utils/helper";

const ErrorPage = () => {
    return (
        <main
            className='h-screen w-full grid place-items-center'
            data-aos='fade'
            data-aos-duration='1000'
            data-aos-delay='100'
            data-aos-offset='0'
        >
            <section className='flex flex-col items-center justify-center gap-10'>
                <header className='font-medium text-3xl flex items-center justify-center gap-1 md:text-4xl xl:text-5xl'>
                    <h1 className='uppercase'>page not found</h1>
                    <BsFileEarmarkBreak />
                </header>
                <div className='flex flex-col items-center'>
                    <h1 className='uppercase text-clr-light-2 my-2'>
                        quick links
                    </h1>
                    <ul className='gap-4 flex flex-col font-normal xl:flex xl:gap-2 xl:flex-row'>
                        {links.map((currLink, index) => {
                            return (
                                <li
                                    className='text-center text-xl uppercase xl:text-base font-normal'
                                    key={index}
                                >
                                    <Link
                                        to={currLink.path}
                                        className='linkHover m-2'
                                    >
                                        {currLink.linkName}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
