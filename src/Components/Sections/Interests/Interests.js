import React from 'react'
import { List } from 'react-content-loader'

const Interests = ({ interestsDatas }) => {

    if (interestsDatas === null) {
        return (
            <List/>
        );
    }

    const { title, content } = interestsDatas;

    const interestHtml = {
        __html: content
    }
    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
                <h2 className="mb-5">{ title }</h2>
                <div dangerouslySetInnerHTML={ interestHtml }></div>
                {/* <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p> */}
            </div>
        </section>
    );
}

export default Interests;
