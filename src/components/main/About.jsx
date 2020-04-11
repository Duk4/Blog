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
                    Ćao, moje ime je Dušan, bavim se programiranjem, iz Beograda sam.
                    Krajem 2018. godine bio sam veoma razočaran svojom tadašnjom firmom i premoren od raznošenja pošiljki.
                    Na svu sreću, ugovor je istekao 30. decembra.
                    Prvo što sam uradio u 2019. bila je kupovina dobrog desktopa, a od budućeg mentora sam dobio Android/Java kurs sa Udemy-a.
                    Nakon dva meseca i 6-7 mini aplikacija, shvatio sam da ništa nisam naučio(samo sam prepisivao).
                    Zato sam prešao na web, tu su stvari mnogo "jednostavnije". JavaScript je delovao lakše zahvaljujući promenljivosti tipa varijable i lakoće pisanja koda.
                    Od tada sam stekao solidno znanje iz oblasti frontend-a i polako se okrećem serveru i NodeJS-u. Framework koji koristim je React.
                </p>
                <p className="indent">
                    U potrazi sam za frontend pozicijom. Trenutno radim na većem i ozbiljnijem projektu, kako bi pokazao i proširio svoje znanje.
                    Ova aplikacija će biti SaaS(Software as a Service) tipa i namenjena je za IT timove. Plan je da se hostuje, dok bude u razvoju kod ćete moći da vidite na Github-u.
                </p>
                <p className="indent" style={{ textAlign: 'center' }}>
                    A sad najbitnije! Zašto biste čitali mene? Nema razloga...
                </p>
                <p className="indent">
                    Ovo je moj ventil, pišem da bi podelio ovo malo znanja i iskustva onima koje zanima programiranje.
                    Da bi motivisao one koji su se umorili od učenja, programiranja, razvlačenja po intervjuima, da nastave dalje.
                </p>
                <p>
                    Možete me kontaktirati putem mejla na: <a href="mailto:dusan.tanasic@yahoo.com" style={{ color: '#F0DF87' }}>dusan.tanasic@yahoo.com</a>
                </p>
            </div>
        </div >
    );
}

export default About;