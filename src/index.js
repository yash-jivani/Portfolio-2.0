import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/about",
                element: <AboutMe />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
