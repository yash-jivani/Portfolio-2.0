import React, { useEffect } from "react";
import { allProjects } from "./utils/helper";
import Project from "./Project";

const Projects = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <section className='my-20 md:px-6 lg:px-10'>
            <h1
                className='text-clr-1 text-3xl my-11 uppercase xl:text-4xl'
                data-aos='fade'
                data-aos-duration='700'
                data-aos-offset='0'
            >
                • All Projects
            </h1>
            <section className='lg:px-6'>
                {allProjects.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
            </section>
        </section>
    );
};

export default Projects;
