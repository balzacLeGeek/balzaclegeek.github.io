import React from 'react'
import { List } from 'react-content-loader'

const Skills = ({ skillsDatas }) => {

    if (skillsDatas === null) {
        return (
            <List/>
        );
    }

    const { title, technos } = skillsDatas;

    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">{ title }</h2>

                <div className="subheading mb-3">{ technos.title }</div>
                <ul className="list-inline dev-icons">
                    {
                        technos.lists.map((techno, key) => {
                            return (
                                <li key={key} className="list-inline-item">
                                    <a>
                                        <img src={ techno.logoPath }/>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Skills;