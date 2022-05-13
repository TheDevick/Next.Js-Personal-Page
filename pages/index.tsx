import React from "react";
import Header from "../src/components/Header";
import Description from "../src/components/Description";
import Works from "../src/components/Works";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Description />
            <Works />
            <About />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}