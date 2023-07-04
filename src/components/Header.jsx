import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/helper";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if (window.innerWidth > 1025) {
            setIsOpen(true);
        }

        window.addEventListener("resize", handleWidth);
        return () => {
            return window.removeEventListener("resize", handleWidth);
        };
    }, []);

    const handleWidth = () => {
        if (window.innerWidth > 1025) {
            setIsOpen(true);
        }
    };

    const handleMenu = () => {
        setIsOpen(!isOpen);
        handleWidth();
    };
    console.log(isOpen);
    return (
        <>
            <nav className='sticky flex top-0 left-0 p-2 py-3 pt-6 border-b-black border-b-2 justify-between items-center bg-clr-1 '>
                <div className='font-medium z-20 md:text-xl'>
                    YASH &copy;{currentYear}
                </div>
                {isOpen ? (
                    <div className='fixed z-10  bg-clr-1 right-0 top-0 h-screen w-full grid place-content-center items-center xl:static xl:w-auto xl:h-auto xl:flex xl:gap-5'>
                        <ul className='gap-4 flex flex-col font-normal xl:flex xl:gap-4 xl:flex-row'>
                            {links.map((currLink, index) => {
                                return (
                                    <li
                                        className='text-left text-3xl uppercase xl:text-base font-normal'
                                        key={index}
                                    >
                                        <Link
                                            to={currLink.path}
                                            className='linkHover'
                                            onClick={() => {
                                                handleMenu();
                                            }}
                                        >
                                            {currLink.linkName}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className='text-left text-3xl uppercase xl:text-base font-normal'>
                                <a href='/'>Resume</a>
                            </li>
                        </ul>
                        <div className='mt-4 xl:m-0'>
                            <p className='xl:hidden text-clr-1 opacity-90 my-2'>
                                Quick links
                            </p>
                            <div className='flex gap-2 items-center'>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0'>
                                    <FaLinkedinIn size={"22"} />
                                </div>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0'>
                                    <FaInstagram size={"22"} />
                                </div>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0'>
                                    <FaGithub size={"22"} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div
                    className='z-[9999] cursor-pointer xl:hidden md:text-xl'
                    onClick={() => {
                        handleMenu();
                    }}
                >
                    {isOpen ? <span>Close</span> : <span>Menu</span>}
                </div>
            </nav>
        </>
    );
};

export default Header;
