import React from "react";
import Header from "../src/components/Header";
import Description from "../src/components/Description";
import Works from "../src/components/Works";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Description />
            <Works />
        </React.Fragment>
    );
}