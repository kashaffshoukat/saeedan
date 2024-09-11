import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import Team from "./views/Team/Team";
import Careers from "./views/Careers/Careers";
import JobApplication from "./views/Careers/JobApplication";
import ContactUs from "./views/ContactUs/ContactUs";
import Services from "./views/Services/Services";
import Blogs from "./views/Blogs/Blogs";
import WebDevelopmentServices from "./views/WebDevelopmentServices/WebDevelopmentServices";
import Company from "./views/Company";
import Portfolio from "./views/Portfolio";
import BlogsDetailsComponent from "./views/Blogs/BlogsDetailsComponent";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/team", element: <Team /> },
        {path: "/blog", element: <Blogs />},
        {path:"/WebDevelopmentServices", element:<WebDevelopmentServices/>},
        {path:"/BlogsDetailsComponent", element:<BlogsDetailsComponent/>},
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/job-application",
          element: <JobApplication />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        { path: "/company", element: <Company /> },
        { path: "/portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return element;
}
