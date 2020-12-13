import React from "react";
import { Container } from "react-bootstrap";

export const Home = () => (
    <div className="homeDiv">
        <h2 className="homeText">
            A Project By Team Pheonix Code Of Duty Hackathon
            <br />
            <span>Team 25 members: </span>
            <br />
            <span>Shubham Jadhav</span>
            <br />
            <span>Charudatta Choudhari</span>
        </h2>
        <Container className="hometitleDiv">
            <p id="pText">
                <p className="Text1">
                    <span>
                        Problem Statement
                        <br />
                        It's estimated that as much as <strong>73%</strong> of
                        the population struggles with a fear of public speaking
                        to a certain degree. This leads to Lack-of
                        self-confidence especially in students and working
                        professionals who get opportunities of public speaking
                        very often.
                    </span>
                </p>
            </p>
        </Container>
    </div>
);
