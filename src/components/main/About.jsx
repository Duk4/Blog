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
                <p>
                    Pozdrav, moje ime je Dušan, iz Beograda sam i bavim se programiranjem.
                    Krajem 2018. godine sam uz podršku sadašnjeg mentora doneo odluku da se posvetim progamiranju.
                    Prvo što sam uradio u 2019. bila je kupovina dobrog desktopa, a od budućeg mentora sam dobio Android/Java kurs sa Udemy-a.
                    Nakon dva meseca i 6-7 mini aplikacija, shvatio sam da ništa nisam naučio(samo sam prepisivao).
                </p>
                <p>
                    Zato sam prešao na web, tu su stvari mnogo "jednostavnije". JavaScript je delovao lakše zahvaljujući promenljivosti tipa varijable i lakoće pisanja koda.
                    Od tada sam stekao solidno znanje iz oblasti frontend-a i polako se okrećem serveru i NodeJS-u. Framework koji koristim je React.
                    U potrazi sam za frontend pozicijom. Trenutno radim na većem i ozbiljnijem projektu, kako bi pokazao i proširio svoje znanje.
                    Ova aplikacija će biti SaaS(Software as a Service) tipa i namenjena je za IT timove.
                </p>
                <strong>
                    <p style={{ textAlign: 'center' }}>A sad najbitnije! Zašto biste čitali mene?</p>
                    <p style={{ textAlign: 'center' }}>Nema razloga...</p>
                </strong>
                <p>
                    Ovo je moj ventil, pišem da bi podelio ovo malo znanja i iskustva onima koje zanima programiranje.
                    Da bi motivisao one koji su se umorili od učenja, programiranja, razvlačenja po intervjuima, da nastave dalje.
                </p>
                <p>
                    Možete me kontaktirati putem mejla na: <a href="mailto:dusan.tanasic@yahoo.com">dusan.tanasic@yahoo.com</a>
                </p>
            </div>
        </div>
    );
}

export default About;