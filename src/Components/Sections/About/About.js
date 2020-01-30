import React from 'react';
import { List } from 'react-content-loader'

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
                                    <a href={ social.url } key={ key }>
                                        <i className={ social.icon }></i>
                                    </a>
                                );
                            })
                        }
                    </div>
                    <div className="contacts">
                        { contact.phone } . <a href="mailto:{ contact.mail }">{ contact.mail }</a> . { `${address.name} . ${address.city} ${address.country}` }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
