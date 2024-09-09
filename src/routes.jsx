import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import Careers from "./views/Careers/Careers";
import JobApplication from "./views/Careers/JobApplication";
import ContactUs from "./views/ContactUs/ContactUs";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
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
      ],
    },
  ]);
  return element;
}
