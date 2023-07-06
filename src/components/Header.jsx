import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/helper";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

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
    return (
        <>
            <header className='sticky flex top-0 z-[99999999] left-0 p-2 py-3 pt-6 border-b-[#4f4f4f] border-b-2 justify-between items-center bg-clr-1'>
                <h1 className='font-medium z-20 cursor-pointer md:text-xl'>
                    <a href='/'>YASH &copy;{currentYear}</a>
                </h1>
                {isOpen ? (
                    <nav className='fixed z-10  bg-clr-1 right-0 top-0 h-screen w-full grid place-content-center items-center xl:static xl:w-auto xl:h-auto xl:flex xl:gap-5'>
                        <ul className='gap-4 flex flex-col font-normal xl:flex xl:gap-2 xl:flex-row'>
                            {links.map((currLink, index) => {
                                return (
                                    <li
                                        className='text-left text-3xl uppercase xl:text-base font-normal'
                                        key={index}
                                    >
                                        <Link
                                            to={currLink.path}
                                            className='linkHover m-2'
                                            onClick={() => {
                                                handleMenu();
                                            }}
                                        >
                                            {currLink.linkName}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <span className='hidden xl:inline'>
                            <RxDividerVertical size={28} color='#000' />
                        </span>
                        <div className='mt-4 xl:m-0 xl:flex xl:items-center ml-2'>
                            <p className='xl:hidden text-clr-light-2 my-2 uppercase'>
                                Socials
                            </p>

                            <div className='flex gap-2 items-center'>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0 '>
                                    <a
                                        href='https://www.linkedin.com/in/yash-jivani-0245ab214/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaLinkedinIn
                                            size={"22"}
                                            className='hover:text-[#4f4f4f] hover:cursor-pointer transition-all'
                                        />
                                    </a>
                                </div>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0'>
                                    <a
                                        href='https://www.instagram.com/yash_jivani17/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaInstagram
                                            size={"22"}
                                            className='hover:text-[#4f4f4f] hover:cursor-pointer transition-all'
                                        />
                                    </a>
                                </div>
                                <div className='rounded-full border border-black p-2 w-fit xl:rounded-none xl:border-0'>
                                    <a
                                        href='https://github.com/yash-jivani'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaGithub
                                            size={"22"}
                                            className='hover:text-[#4f4f4f] hover:cursor-pointer transition-all'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                ) : (
                    ""
                )}
                <div
                    className='z-[9999] cursor-pointer xl:hidden md:text-xl'
                    onClick={() => {
                        handleMenu();
                    }}
                >
                    {isOpen ? (
                        <span className='hover:text-[#4f4f4f] transition-all'>
                            Close
                        </span>
                    ) : (
                        <span className='hover:text-[#4f4f4f] transition-all'>
                            Menu
                        </span>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
