import React from "react";
import { Route, Routes } from "react-router-dom";
import Slide from "./Slide.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import ContactUs from "./ContactUs.js";
import NoPage from "./NoPage.js";

const Routing = () => {
  return (
    <div className="container-fluid p-0">
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  );
};

export default Routing;
