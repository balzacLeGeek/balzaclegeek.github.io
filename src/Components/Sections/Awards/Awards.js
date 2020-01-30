import React from 'react'
import { List } from 'react-content-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Awards = ({ awardsDatas }) => {
    if (awardsDatas === null) {
        return (
            <List/>
        );
    }

    const { title, lists } = awardsDatas;

    return (
        <section className="resume-section p-3 p-lg-5 d-flex" id="awards">
            <div className="w-100">
                <h2 className="mb-5">{ title }</h2>
                <ul className="fa-ul mb-0">
                    {
                        lists.map((award, key) => {
                            const placePrefix = award.place === 1 ? 'er' : 'ème';
                            const htmlContent = {
                                __html: award.content
                            }

                            return(
                                <li key={ key }>
                                    <FontAwesomeIcon icon={['fas', 'trophy']} className="text-warning"/>
                                    { award.place }<sup>{ placePrefix }</sup>
                                    <p dangerouslySetInnerHTML={ htmlContent }></p>
                                    <p>
                                        <span className="team-name">
                                            <a href={ award.team.website }>
                                                { award.team.name }
                                            </a>
                                        </span> - 
                                        <span className="date">{ award.date }</span>
                                    </p>
                                </li>  
                            )
                        })
                    }
                </ul>
            </div>
        </section>   
    );
}

export default Awards;
