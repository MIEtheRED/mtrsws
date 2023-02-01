import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/layout";
import Home from "../../pages/home/home";
import Services from "../../pages/services/services";
import Blogs from "../../pages/blogs/blogs";
import Contact from "../../pages/contact/contact";
import NoPage from "../../pages/no-page/no-page";

// eslint-disable-next-line no-unused-vars
import styles from "./navbar.module.css";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}