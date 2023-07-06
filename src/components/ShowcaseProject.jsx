import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
import { allProjects } from "./utils/helper";

const ShowcaseProject = () => {
    let showcaseProjects = allProjects.slice(0, 3);
    return (
        <section className='my-36 lg:mx-7 '>
            <header className='xl:my-12'>
                <h1 className='text-clr-2'>/02</h1>
                <h2 className='text-2xl lg:text-3xl'>Recent Projects</h2>
            </header>
            <section>
                <div>
                    {showcaseProjects.map((project, index) => {
                        return <Project key={index} project={project} />;
                    })}
                </div>
                <Link
                    to={"/projects"}
                    data-aos='fade'
                    data-aos-duration='9000'
                    data-aos-delay='300'
                    data-aos-offset='0'
                    className='underline my-14 underline-offset-8 hover:no-underline hover:text-[#606060]'
                >
                    All Projects &rarr;
                </Link>
            </section>
        </section>
    );
};

export default ShowcaseProject;
