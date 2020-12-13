import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "../App.css";
const Styles = styled.div`
    .navbar-nav {
        background-color: #292929;
        border-radius: 12px;
    }
    .navbar {
        position: fixed;
        background-color: #222;
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 1rem 1rem 0.3rem;
        overflow: hidden;
        z-index: 1;
        width: 100%;
        opacity: 0.9;
        top: 0;
        box-shadow: 17px 0 15px -4px rgba(31, 73, 125, 0.8),
            -12px 0 8px -4px rgba(31, 73, 125, 0.8);
        box-shadow: 0 3px 0px 0px #7cb9c9, 0 -9px 0px 0px #7cb9c9,
            12px 0 15px -4px rgba(31, 73, 125, 0.8),
            -12px 0 15px -4px rgba(31, 73, 125, 0.8);
    }

    .nav-link {
        cursor: pointer;
        font-size: 1.5rem;
        color: #1a202a;
    }

    .navbar-brand,
    .navbar-nav .nav-link {
        padding: 10px;
        font-family: "Lora";
        color: #fff;
        &:hover {
            color: #89cadb;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <span className="spanText0">Virtual</span>
                <span className="spanText">Reality</span>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                type="button"
                aria-label="Toggle NavigationBar"
                class="navbar-toggler collapsed"
            />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
