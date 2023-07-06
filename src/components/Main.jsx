import React, { useEffect } from "react";
import Intro from "./Intro";
import ShowcaseProject from "./ShowcaseProject";

const Main = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <main>
            <Intro />
            <ShowcaseProject />
        </main>
    );
};

export default Main;
