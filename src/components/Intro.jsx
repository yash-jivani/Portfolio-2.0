import React from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <>
            <section className='intro my-5 min-h-[75vh] grid md:mx-7 lg:mx-10'>
                <div className='flex flex-col justify-end '>
                    <header className=' text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl uppercase'>
                        <h1>Yash Jivani</h1>
                        <h1>Portfolio site.</h1>
                    </header>
                    <header className='text-xl md:text-2xl lg:text-3xl 2xl:text-4xl'>
                        <h2 className='capitalize text-clr-light font-medium mt-3'>
                            Full stack developer
                        </h2>
                    </header>
                </div>
                <div className='justify-self-end self-end'>
                    <div>
                        <BsArrowDownLeft size={"30"} />
                    </div>
                </div>
            </section>
            <section className='flex my-36 lg:mx-7'>
                <div className='w-full lg:flex lg:justify-between'>
                    <header>
                        <h1 className='text-clr-2'>/01</h1>
                        <h2 className='text-2xl lg:text-3xl'>Me</h2>
                    </header>
                    <article className='lg:w-2/3 lg:mt-20'>
                        <p className='text-base my-3 xl:text-lg'>
                            Passionate about web technologies. I love working at
                            the intersection of creativity and user-friendly
                            interfaces. I create memorable web experiences. when
                            I'm not building or exploring new web experiences,
                            I'm probably playing games or watching movies.
                        </p>
                        <Link
                            to={"/about"}
                            className='underline underline-offset-8 hover:no-underline hover:text-[#606060]'
                        >
                            About me &rarr;
                        </Link>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Intro;
