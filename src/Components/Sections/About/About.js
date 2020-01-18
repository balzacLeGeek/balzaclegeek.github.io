import React, { useState } from 'react';


const About = () => {
    const [infos, setInfos] = useState(
        {
            me : {
                lastname: "R.",
                firstname: "Niaina Michaël",
                about: "Développeur Symfony - Web technologies & Coffee addicted",
            },
            address: {
                name: "Anjanahary 2N",
                city: "Antananarivo",
                country: "Madagascar",
            },
            contact: {
                mail: "michaniainar@gmail.com",
                phone: "+261 34 20 772 92",
            },
            socials: [
                {
                    name: "linkedin",
                    icon: "fab fa-linkedin-in",
                    url: "https://linkedin.com/in/balzaclegeek",
                },
                {
                    name: "github",
                    icon: "fab fa-github",
                    url: "https://github.com/balzacLeGeek",
                },
                {
                    name: "facebook",
                    icon: "fab fa-facebook",
                    url: "https://facebook.com/balzacLeGeek",
                },
                {
                    name: "twitter",
                    icon: "fab fa-twitter",
                    url: "https://twitter.com/balzacLeGeek",
                },
            ]
        }
    )

    const { me, address, contact, socials } = infos;

    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">{ me.firstname } <span className="text-primary">{ me.lastname }</span></h1>
                <div className="subheading mb-5">
                    { `${address.name} . ${address.city} ${address.country}` } . <a href="mailto:{ contact.mail }">{ contact.mail }</a>
                </div>
                <p className="lead mb-5">
                    { me.about }
                </p>
                <div className="social-icons">
                    {
                        socials.map((social, key) => {
                            return (
                                <a href={ social.url } id={ `about-social-${key}` }>
                                    <i className={ social.icon }></i>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default About;
