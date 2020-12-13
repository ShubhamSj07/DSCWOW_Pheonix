import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import vrImage from "../assets/vrImage_1.jpg";

let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = "";
const greetingStyling = {};

if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning...";
    greetingStyling.color = "#BADC57";
} else if (currentDate >= 12 && currentDate < 17) {
    greeting = "Good Afternoon...";
    greetingStyling.color = "#FCA31C";
} else if (currentDate >= 17 && currentDate <= 19) {
    greeting = "Good Evening...";
    greetingStyling.color = "#FF3E4D";
} else {
    greeting = "Good Night...";
    greetingStyling.color = "#fff";
}
const Styles = styled.div`
    .jumbo {
        background: url(${vrImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 550px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="titleDiv">
                <h1>
                    Hello, <span style={greetingStyling}> {greeting} </span>
                </h1>
                <p id="pText">
                    <span id="spanJumboText">Explore</span>
                    <span id="spanJumboText1">Virtual Reality...</span>
                </p>
            </Container>
        </Jumbo>
    </Styles>
);
