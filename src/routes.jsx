import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import Careers from "./views/Careers/Careers";
import JobApplication from "./views/Careers/JobApplication";
import ContactUs from "./views/ContactUs/ContactUs";
import Services from "./views/Services/Services";
import Team from "./views/Team/Team/Team";
import Blogs from "../src/views/Blogs/Blogs";
import Company from "../src/views/Company/index";
import Portfolio from "../src/views/Portfolio/index";
import BlogsDetailsComponent from "./views/Blogs/BlogsDetailsComponent";
import WebDevelopmentServices from "./views/WebDevelopmentServices/WebDevelopmentServices";
import GetInTouch from "./components/GetInTouch/GetInTouch";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/team", element: <Team /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/company", element: <Company /> },
        { path: "/blog/:slug", element: <BlogsDetailsComponent /> },
        {
          path: "/",
          element: <Landing />,
        },
       { path:"/GetInTouch", element:<GetInTouch/>},
        {
          path: "/careers",
          element: <Careers />,
        },
        { path: "/WebDevelopmentServices", element: <WebDevelopmentServices /> },
       
        {
          path: "/job-application",
          element: <JobApplication />,
        }
       
        ,

        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
         
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
      ],
    },
  ]);
  return element;
}
