import React from 'react';
import { List } from 'react-content-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({ aboutDatas }) => {

    if (aboutDatas === null) {
        return (
            <List/>
        );
    }

    const { me, address, contact, socials } = aboutDatas;

    const aboutHtml = {
        __html: me.about
    }

    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{ me.firstname }<br/> <span className="text-primary">{ me.lastname }</span></h1>
                    <div dangerouslySetInnerHTML={ aboutHtml }></div>
                    <div className="social-icons">
                        {
                            socials.map((social, key) => {
                                return (
                                    <a href={ social.url } key={ key } target="_blank">
                                        <FontAwesomeIcon icon={['fab', social.icon]} />
                                    </a>
                                );
                            })
                        }
                    </div>
                    <div className="contacts">
                        { contact.phone } . 
                        <a href="mailto:{ contact.mail }">{ contact.mail }</a> . 
                        <a href="https://www.google.com/maps/place/RAZAFIMANDIMBY+Niaina+Micha%C3%ABl+(balzacLeGeek)/@-18.9950618,47.5283049,1042m/data=!3m1!1e3!4m5!3m4!1s0x21f07ba3c02e6077:0x7798057095e53355!8m2!3d-18.9955488!4d47.5301449" target="_blank">{ `${address.name} . ${address.city} ${address.country}` }</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
