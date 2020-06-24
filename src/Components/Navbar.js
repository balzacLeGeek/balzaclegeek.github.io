import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [navbarLinks, setNavbarLinks] = useState(
        [
            {
                to: "about",
                title: "A propos",
            },
            {
                to: "experience",
                title: "Experiences",
            },
            {
                to: "education",
                title: "Education",
            },
            {
                to: "skills",
                title: "Compétences",
            },
            {
                to: "awards",
                title: "Awards",
            },
            {
                to: "interests",
                title: "Autres",
            }
        ]
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">balzacLeGeek</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./imgs/RAZAFIMANDIMBY-Niaina-Michael-profil.jpg" alt="balzacLeGeek"/>
                </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {
                        navbarLinks.map((navbarLink, key) => {
                            return (
                                <li className="nav-item" key={ key }>
                                    <Link 
                                        className="nav-link"
                                        activeclassname="active"
                                        to={ navbarLink.to }
                                        spy={ true }
                                        smooth={ true }
                                        // offset={ -70 }
                                        duration= { 500 }>{ navbarLink.title }</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
