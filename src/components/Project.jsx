import React from "react";
import { GoLink } from "react-icons/go";

const Project = ({ project }) => {
    const { name, description, github, techstack } = project;
    return (
        <>
            <section
                data-aos-duration='1000'
                data-aos='fade-up'
                data-aos-offset='0'
            >
                <div className='my-7 project flex flex-col gap-2'>
                    <header className=''>
                        <h1 className='text-lg md:text-xl'>{name}</h1>
                        <p className='text-sm text-[#606060] md:text-base'>
                            {description}
                        </p>
                        <p className='text-sm md:text-base'>
                            <span className='font-medium text-[#4f4f4f]'>
                                Techstack:
                            </span>{" "}
                            {techstack.join(", ")}
                        </p>
                    </header>
                    <div className='w-max flex items-center gap-1 border-black border-b-2 hover:border-b-[#fff] hover:text-[#606060]'>
                        <a href={github} target='_blank' rel='noreferrer'>
                            Link
                        </a>
                        <GoLink className='inline' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
