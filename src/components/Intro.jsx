import React from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <>
            <div className='intro my-5 min-h-[75vh] grid md:mx-7 lg:mx-10'>
                <div className='flex flex-col justify-end '>
                    <div className=' text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl uppercase'>
                        <h1>Yash Jivani</h1>
                        <h1>Portfolio site.</h1>
                    </div>
                    <div className='text-xl md:text-2xl lg:text-3xl 2xl:text-4xl'>
                        <h2 className='capitalize text-clr-light font-medium mt-3'>
                            Full stack developer
                        </h2>
                    </div>
                </div>
                <div className='justify-self-end self-end'>
                    <div className=''>
                        <BsArrowDownLeft size={"30"} />
                    </div>
                </div>
            </div>
            <div className='flex my-20 lg:mx-7'>
                <div className='w-full lg:flex lg:justify-between'>
                    <div>
                        <h1 className='text-2xl text-clr-2 lg:text-3xl'>/01</h1>
                    </div>
                    <div className='lg:w-2/3'>
                        <p className='capitalize text-base my-5 xl:text-lg'>
                            Passionate about web technologies. I love working at
                            the intersection of creativity and user-friendly
                            interfaces. I create memorable web experiences. when
                            I'm not building or exploring new web experiences,
                            I'm probably playing games or watching movies.
                        </p>
                        <Link to={"/about"} className='linkHover'>
                            More <GoArrowRight className='inline' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
