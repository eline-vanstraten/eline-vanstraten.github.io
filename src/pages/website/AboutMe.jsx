import SkillSection from "../../components/SkillSection.jsx";

function AboutMe() {
    return (
        <>
            <section className={"h-auto px-8 py-8 mx-auto"} id={"over-mij"}>
                <h3 className={"text-3xl sm:text-5xl pb-5"}>Over mij</h3>
                <div className={"flex flex-col lg:flex-row gap-8 "}>

                    <div className={"flex flex-col gap-4 text-base sm:text-lg leading-relaxed"}>
                        <p>
                            Hallo, Ik ben Eline van Straten, 19 jaar en tweedejaars student Creative Media en Game
                            Technologies aan de Hogeschool Rotterdam.
                        </p>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}><span className={"text-accent"}>✦</span> Mijn
                                creatieve ontwikkeling</h4>
                            <p>
                                Als klein kind maakte ik talloze edits met apps zoals Video Star en I-Movie. Dit
                                waren mijn eerste speelse stappen in het omzetten van creatieve ideeën naar beeld.
                                Op de Hogeschool van Rotterdam werk ik nu met programmeertalen als HTML, CSS,
                                JavaScript, PHP en frameworks zoals Laravel en React. Hiermee ontwikkel ik
                                applicaties en websites en leg ik een solide basis in full stack development. Mijn
                                creatieve ideeën weet ik steeds beter te vertalen naar praktische digitale
                                oplossingen. Het geeft me veel plezier om goed werkende applicaties te bouwen die
                                niet alleen technisch kloppen, maar ook visueel aantrekkelijk zijn en prettig werken
                                voor de gebruiker.
                            </p>
                        </div>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}><span className={"text-accent"}>✦</span> Mijn passie
                                voor dans
                            </h4>
                            <p>
                                Dans is een van mijn grote passies. Al zo’n 15 jaar beoefen ik verschillende
                                dansvormen (zoals modern, hip hop, ballet en K-pop). Ook maak ik deel uit van
                                selectie- en wedstrijdteams. Binnen deze teams heb ik vaardigheden ontwikkeld
                                zoals het leren van nieuwe dingen, discipline en doorzettingsvermogen. Ik kan goed
                                werken in teamverband, maar werk ook graag zelfstandig. Daarnaast ben ik gewend
                                om feedback te ontvangen en zal ik hier ook om vragen, omdat dit mij helpt om
                                mezelf steeds verder te verbeteren in wat ik doe.
                            </p>
                        </div>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}><span className={"text-accent"}>✦</span> Op Zoek naar
                                een Meeloopstage (periode begin september 2026 tot eind januari 2027)
                            </h4>
                            <p>
                                Op dit moment ben ik actief op zoek naar een meeloopstage met een focus op front-end
                                development. Ik zou graag mijn bestaande kennis van programmeren verder uit
                                willen breiden en ervaring op willen doen binnen een professioneel team. Door
                                samen te werken met ervaren collega’s hoop ik niet alleen mijn technische
                                vaardigheden te versterken, maar ook mezelf te ontwikkelen als creative developer
                                én als persoon. Zo kan ik mijn creativiteit en doorzettingsvermogen inzetten en
                                verder groeien binnen het vakgebied dat mij zo enthousiast maakt.
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-row lg:flex-col justify-center gap-4"}>
                        <div className={"w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden"}>
                            <img className={"w-full h-full object-cover object-bottom scale-250"}
                                 src={"/myself2.jpeg"} alt={"me"}/>
                        </div>
                        <div className={"w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden"}>
                            <img className={"w-full h-full object-cover"}
                                 src={"/myselfDance.jpeg"} alt={"me dancing"}/>
                        </div>
                    </div>

                </div>

                <SkillSection/>
            </section>
        </>
    )
}

export default AboutMe;