import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=''>
            <div className='border-t-black border-t-2'>
                <div className=''>
                    <img src='' alt='img' />
                </div>
                <p>Please feel free to contact me by e-mail.</p>
                <p>Lorem ipsum dolor sit.</p>
                <div className='flex'>
                    <a href='/' className=''>
                        yashjivani17@gmail.com &#8599;
                    </a>
                </div>
                <div className='socials'>
                    <h5>Socials</h5>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                    <div className='nav-items'>
                        <ul>
                            <li>
                                <Link to={"/projects"}>Projects</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About me</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
