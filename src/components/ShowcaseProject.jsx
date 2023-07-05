import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
import { allProjects } from "./utils/helper";

const ShowcaseProject = () => {
    let showcaseProjects = allProjects.slice(0, 3);
    return (
        <div className='showcase my-36 lg:mx-7 '>
            <div className="xl:my-12">
                <h1 className='text-clr-2'>/02</h1>
                <h2 className='text-2xl lg:text-3xl'>Recent Projects</h2>
            </div>
            <div className="">
                <div className='project-wrapper'>
                    {showcaseProjects.map((project, index) => {
                        return <Project key={index} project={project} />;
                    })}
                </div>
                <Link to={"/projects"} className="underline my-14 underline-offset-8 hover:no-underline hover:text-[#606060]">All Projects &rarr;</Link>
            </div>
        </div>
    );
};

export default ShowcaseProject;
