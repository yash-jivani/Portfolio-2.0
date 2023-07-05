import React from "react";
import { GoLink } from "react-icons/go";

const Project = ({ project }) => {
    const { name, description, github, techstack } = project;
    return (
        <>
            <div className="">
                <div className='my-7 project flex flex-col gap-2'>
                    <div className=''>
                        <h1 className='text-lg'>{name}</h1>
                        <p className='text-sm text-[#606060]'>{description}</p>
                        <p className="text-sm "><span className="font-medium text-[#4f4f4f]">Techstack:</span> {techstack.join(", ")}</p>
                    </div>
                    <div className='w-max flex items-center gap-1 border-black border-b-2 hover:border-b-[#fff] hover:text-[#606060]'>
                        <a href={github} className=''>
                            Link
                        </a>
                        <GoLink className='inline' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
