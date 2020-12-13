import React from "react";
import styled from "styled-components";
import vrImage_2 from "../src/assets/vrImage_2.jpg";
import vrImage_3 from "../src/assets/vrImage_3.jpg";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./App.css";
const Styles = styled.div`
    .jumbo {
        background: url(${vrImage_2}) no-repeat fixed bottom;
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
    .jumbo1 {
        background: url(${vrImage_3}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 550px;
        position: relative;
        z-index: -2;
    }

    .overlay1 {
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

const styles = {
    container: {
        textAlign: "center",
    },
};

const Button = styled.button`
    outline: none;
    background-color: #363d49;
    color: white;
    padding: 5px 8px 8px 8px;
    border-radius: 5px;

    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 500ms;
    &:hover {
        outline: none;
        background-color: #1a202a;
        border-radius: 9px;
    }
`;

export const About = () => (
    <div className="aboutDiv">
        <h2 className="aboutText">Speak VR</h2>
        <p className="aboutP">
            Project title : <span className="spanText1">Virtual</span>
            <span className="spanText2">Reality</span>
        </p>
        <Styles>
            <a href="../aframe-main/index.html">
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container className="titleDiv"></Container>
                </Jumbo>
            </a>
            <Jumbo fluid className="jumbo1">
                <div className="overlay1"></div>
                <Container className="titleDiv"></Container>
            </Jumbo>

            <div style={styles.container}>
                <Button>
                    <a
                        href="https://drive.google.com/file/d/1R4r_p1rRqdZi8If47yo7pi9_a1JegG6J/view"
                        target="_blank"
                        className="aTag"
                    >
                        Project PPT
                    </a>
                </Button>
            </div>
        </Styles>
        <p className="aboutParaText">Glance</p>
        <p className="aboutParaText1">
            <span className="Text">What is Virtual Reality?</span>
            <br />
            <br />
            Virtual Reality means feeling the imaginary(virtual) world, rather
            than the real one.
            <br />
            The imaginary world is a simulation running in a computer.
            <br />
            Virtual reality is the term used for computer generated 3D
            environments that allow the user to enter and interact with
            alternate realities.
            <br />
            The definition of ‘virtual’ is near and ‘reality’ is what we
            experience as human beings.
            <br />
            <br />
            <span className="Text">History</span>
            <br />
            More than one person has been involved in the development of this
            technological system.
            <br />
            In 1950’s visionary cinematography <strong>Morton Heilig</strong>
            built a single user console called Sensorama. This enabled the user
            watch television in 3 dimensional ways.
            <br />
            <br />
            <span className="Text">Applications of Virtual Reality</span>
            <br />
            Virtual Reality in the Military
            <br />
            Virtual Reality in Healthcare
            <br />
            Virtual Reality and Education
            <br />
            Virtual Reality and Scientific Visualization, etc.
            <br />
            <br />
            <span className="Text">How It Works?</span>
            <br />1 <br />
            Go to the website and select the place where you want to practice eg
            Auditorium or officer or classroom
            <br />2 <br />
            Enter the VR scene using your device. Give your speech at your
            comfort level
            <br />
            3 <br />
            Interact with the audience via micro interactions.
            <br />
            4 <br />
            Go face off one on one in a debate.
            <br />
        </p>
    </div>
);
