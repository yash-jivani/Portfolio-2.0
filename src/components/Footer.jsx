import React from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/helper";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import Me from "./assests/imgs/yash-rounded.png";

const Footer = () => {
    return (
        <footer className='pt-10 pb-5 border-t-black border-t-2 md:px-6 lg:px-16 xl:px-26 2xl:px-32 '>
            <div className='w-20 my-4'>
                <img src={Me} className='w-full' alt='img' />
            </div>
            <p className='text-clr-1'>
                Please feel free to contact me by e-mail.
            </p>
            <div className='footer-mail w-full my-6 text-center flex justify-start items-center border-black border-b-[1px] hover:border-b-[#ccc] hover:text-[#303030]'>
                <a
                    href='/'
                    className='text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl'
                >
                    yashjivani17@gmail.com ↗
                </a>
            </div>
            <div className='socials my-10'>
                <h5 className='text-clr-1 uppercase text-clr-light-2 mb-4'>
                    Socials
                </h5>
                <div className='lg:flex lg:justify-between lg:items-start'>
                    <div className='flex gap-3 items-center lg:items-start'>
                        <div className='rounded-full border border-black p-2 w-fit'>
                            <FaLinkedinIn size={"22"} />
                        </div>
                        <div className='rounded-full border border-black p-2 w-fit'>
                            <FaInstagram size={"22"} />
                        </div>
                        <div className='rounded-full border border-black p-2 w-fit'>
                            <FaGithub size={"22"} />
                        </div>
                    </div>
                    <div className='nav-items my-16 lg:mb-auto'>
                        <ul className='gap-3 flex flex-col font-normal lg:flex-row lg:items-start'>
                            {links.map((currLink, index) => {
                                return (
                                    <li
                                        className='text-left uppercase'
                                        key={index}
                                    >
                                        <Link
                                            to={currLink.path}
                                            className='linkHover'
                                        >
                                            {currLink.linkName}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-right uppercase '>
                &copy; yash {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
