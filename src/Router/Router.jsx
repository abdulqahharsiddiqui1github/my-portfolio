import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router ;