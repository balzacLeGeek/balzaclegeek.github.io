import React from 'react';
import { List } from 'react-content-loader'

const Experiences = ({ experiencesDatas }) => {

    if (experiencesDatas === null) {
        return (
            <List/>
        );
    }

    const { title, lists } = experiencesDatas;

    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">{ title }</h2>

                {
                    lists.map((item, itemKey) => {
                        const societyWebsiteUrl = item.society.website ? item.society.website : 'javascript:;';
                        const endDate = item.date.end ? item.date.end : "Aujourd'hui";
                        const jobDescription = {
                            __html: item.description ?? ""
                        }

                        return (
                            <div className="resume-item d-flex flex-column flex-md-row mb-5" key={ itemKey }>
                                <div className="resume-content mr-auto">
                                    <h3 className="mb-0 experience-society">
                                        <a href={ societyWebsiteUrl } target="_blank">{ item.society.name }</a>
                                    </h3>
                                    <div className="subheading mb-3">{ item.title }</div>
                                    <div className="occupation-summary"><p>{ item.summary}</p></div>
                                    <div dangerouslySetInnerHTML={ jobDescription }></div>
                                    <div>
                                        {
                                            item.technos.map((techno, technoKey) => {
                                                const separator = technoKey === item.technos.length - 1 ? '' : ' - '; 
                                                return(
                                                    <span key={ technoKey }>{ `${ techno }${separator}` }</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">{ item.date.start } - { endDate }</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Experiences;
