import React from "react";
import Header from "../src/components/Header";
import Description from "../src/components/Description";
import Works from "../src/components/Works";
import About from "../src/components/About";
import Footer from "../src/components/Footer";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Description />
            <Works />
            <About />
            <Footer />
        </React.Fragment>
    );
}