import React from "react";
import Header from "../src/components/Header";
import Description from "../src/components/Description";
import Works from "../src/components/Works";
import Footer from "../src/components/Footer";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Description />
            <Works />
            <Footer />
        </React.Fragment>
    );
}