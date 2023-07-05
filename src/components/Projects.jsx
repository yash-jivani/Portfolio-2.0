import React, { useEffect } from "react";
import { allProjects } from "./utils/helper";
import Project from "./Project";

const Projects = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <div className='my-20 md:px-6 lg:px-10'>
            <h1 className='text-clr-1 text-3xl my-11 uppercase xl:text-4xl'>
                • All Projects
            </h1>
            <div className='lg:w-10/12 ml-auto'>
                {allProjects.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
