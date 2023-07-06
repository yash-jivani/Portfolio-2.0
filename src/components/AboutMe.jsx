import React, { useEffect, useState } from "react";
import Me from "./assests/imgs/yash.jpg";
import { quotes } from "./utils/helper";
import { GoHorizontalRule } from "react-icons/go";

const AboutMe = () => {
    const [quoteOfTheDay, setQuoteOfTheDay] = useState({});

    const getRandomQuote = (quotes) => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    useEffect(() => {
        setQuoteOfTheDay(getRandomQuote(quotes));
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "Saas",
        "Tailwindcss",
        "Bootstrap",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "webpack",
        "Parcel",
        "Git",
        "Github",
    ];
    return (
        <main className='md:px-6 lg:px-10'>
            <h1
                className='header text-clr-1 text-3xl my-11 uppercase xl:text-4xl'
                data-aos='fade'
                data-aos-duration='700'
                data-aos-offset='0'
            >
                • About me
            </h1>
            <section className='my-16 xl:flex xl:flex-row-reverse xl:justify-between xl:gap-6'>
                <div
                    className='my-10 md:w-10/12 lg:w-2/3 xl:w-1/2 xl:my-0'
                    data-aos='fade'
                    data-aos-duration='700'
                    data-aos-offset='0'
                >
                    <img src={Me} className='w-full' alt='Yash' />
                </div>
                <div className='xl:w-1/2 xl:self-end'>
                    <h1
                        className='uppercase text-clr-1 text-xl'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'
                    >
                        <p className='font-medium'>Yash Jivani</p>
                        <p className='text-sm text-clr-light-2'>
                            A{" "}
                            <span className='font-medium'>
                                Full stack developer
                            </span>{" "}
                            based in{" "}
                            <span className='font-medium'> India </span>
                        </p>
                    </h1>
                    <p
                        className='my-6'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'
                    >
                        I enjoy designing and programming web applications that
                        exceed expectations. I love combining the worlds of
                        logic and creative design to make eye-catching,
                        accessible, and user-friendly websites. I'm always
                        looking to improve my skill set and provide value to an
                        organization.
                    </p>
                    <div
                        className='skills'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'
                    >
                        <h1 className='uppercase text-clr-1 text-base font-medium'>
                            Skills
                        </h1>
                        <h1 className='text-sm font-light text-clr-light-2'>
                            Languages/tools
                        </h1>
                        <div
                            className='mt-3'
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'
                        >
                            <p>
                                Currently I mainly use the following languages
                                and tools.
                            </p>
                            <p>{skills.join(" / ")}</p>
                        </div>
                        <div
                            className='mt-3'
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'
                        >
                            <a
                                href='https://drive.google.com/file/d/1TatsaHrgM3nmyfqZLa_4aIyv4RCwbERK/view?usp=drive_link'
                                rel='noreferrer'
                                className='text-clr-1 font-medium underline underline-offset-8 hover:no-underline hover:text-[#606060]'
                            >
                                Resume &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {quoteOfTheDay && (
                <section className='my-14 xl:w-2/3'>
                    <h1
                        className='uppercase text-clr-1 text-lg font-medium quote-divider-right'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'
                    >
                        Quote
                    </h1>
                    <h2
                        className='text-sm font-light text-clr-light-2 mb-3 font-serif'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'
                    >
                        Inspirational/famous
                    </h2>
                    <div
                        className='text-xl lg:text-2xl'
                        data-aos='fade'
                        data-aos-duration='900'
                        data-aos-delay='300'
                        data-aos-offset='0'
                    >
                        <p className='font-quote font-bold'>
                            "{quoteOfTheDay.text}"
                        </p>
                        <p className='flex items-center gap-2 font-quote mt-2 text-clr-2'>
                            <GoHorizontalRule className='ml-auto ' />
                            {quoteOfTheDay.author
                                ? quoteOfTheDay.author
                                : "Someone"}
                        </p>
                    </div>
                </section>
            )}
        </main>
    );
};

export default AboutMe;
