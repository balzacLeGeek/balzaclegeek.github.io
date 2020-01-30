import React from 'react'
import { List } from 'react-content-loader'

const Education = ({ educationDatas }) => {
    if (educationDatas === null) {
        return (
            <List/>
        );
    }

    const { title, lists } = educationDatas;

    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">{ title }</h2>

                {
                    lists.map((item, key) => {
                        return(
                            <div className="resume-item d-flex flex-column flex-md-row mb-5" key={ key }>
                                <div className="resume-content mr-auto">
                                    <h3 className="mb-0">{ item.etablishment }</h3>
                                    <div className="subheading mb-3">{ item.diploma }</div>
                                    <div>{ item.description }</div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">{ `${ item.date.start } - ${ item.date.end }` }</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Education;