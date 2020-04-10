import React, { useEffect } from "react";
import Helmet from "react-helmet";

const About = () => {
    useEffect(() => {
        const el = document.getElementById('scroll-into-view');
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return (
        <div className="about" id="scroll-into-view">
            <Helmet>
                <title>Autor - Dušan Tanasić</title>
            </Helmet>
            <div className="about-text">
                <p className="indent">
                    Hi, my name is Dušan Tanasić and I'm a Software Developer from Belgrade, Serbia.
                    By the end of the 2018, I was miserable at my package delivery job. Thankfully my contract has ran out on 30th December.
                    First thing I did in 2019. was buying a new PC and getting an Android/Java course. After two months not much was clear,
                    so I switched to Web, which was much more transparent. JavaScript seemed easier due to data type fluidity and zero boilerplate.
                    Since then, I aquired good understanding of frontend development and slowly turning towards server side and NodeJS.
                    My framework of choice is React.js; it was advised by my mentor and I like working with it.
                </p>
                <p className="indent">
                    I'm unemployed and looking for a frontend developer position. Currently, my mentor is writting project documentation for an app he came up with for me to build.
                    So even though I still don't have work experience, the next web app that I make is going to be a SaaS(Software as a Service) application.
                    The plan is to host/publish it one day, although it's code probably won't be open source like my other projects.
                </p>
                <p className="indent" style={{ textAlign: 'center' }}>
                    Why should you read my blog?
                    You shouldn't...
                </p>
                <p className="indent">
                    This is a way for me to say: "F*** you!", to anyone wasting my time on the course of finding the first job in the industry.
                    It's also a chance to inspire others to not quit their own journeys and maybe guide some of you during the learning process.
                    Blog is for everyone that's already in the IT industry or is thinking about coming into it.
                </p>
                <p>
                    If you have any questions, you can contact me via email: dusan.tanasic@yahoo.com
                </p>
            </div>
        </div >
    );
}

export default About;