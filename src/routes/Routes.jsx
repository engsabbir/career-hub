import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Blog from "../pages/Blog/Blog";
import JobDetails from "../pages/JobDetails/JobDetails";
import Jobs from "../pages/Jobs/Jobs";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorMessage></ErrorMessage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/applied-jobs',
                element:<AppliedJob></AppliedJob>,
                loader:()=>fetch('/data/jobs.json')
            },
            {
                path: '/jobs',
                element:<Jobs></Jobs>,
                loader:()=>fetch('/data/jobs.json')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader:()=> fetch('/data/jobs.json')
            },
            {
                path:'/about-us',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact-us',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default Routes;