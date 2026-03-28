import ProjectCard from "../components/ProjectCard.jsx";

function Index() {

    return (
        <>
            <section className={"min-h-screen flex"} id={"home"}>
                <div className={"flex flex-col justify-center px-8 min-w-300"}>
                    <div className={"flex justify-center"}>
                        <img className={"w-60 h-60 rounded-full object-cover"} src={"/myself1.jpeg"} alt={"me"}/>
                    </div>
                    <div className={"pt-10"}>
                        <h1 className={"text-8xl"}>Creative Developer <span className={"text-accent"}>✦</span></h1>
                        <h2 className={"font-gabriela text-7xl"}>PORTFOLIO</h2>
                    </div>

                </div>
                <div className={"flex-1"}>
                    <img className={"h-screen w-full object-cover"} src={"/background.jpeg"}
                         alt={"me programming an html css project on the computer"}/>
                </div>
            </section>


            <section className={"min-h-screen flex px-8"} id={"over-mij"}>
                <div className={"flex flex-col gap-10"}>
                    <h3 className={"text-6xl"}>Over mij</h3>
                    <div className={"flex flex-row gap-8 items-start"}>
                        <div className={"flex flex-col gap-4"}>
                            <div className={"w-60 h-60 rounded-3xl overflow-hidden"}>
                                <img className={"w-full h-full object-cover object-bottom scale-250"}
                                     src={"/myself2.jpeg"} alt={"me"}/>
                            </div>
                            <div className={"w-60 h-60 rounded-3xl overflow-hidden"}>
                                <img className={"w-full h-full object-cover "}
                                     src={"/myselfDance.jpeg"} alt={"me dancing"}/>
                            </div>
                        </div>

                        <div className={"flex flex-col gap-4"}>
                            <p className={"text-lg leading-relaxed pb-4"}>
                                Hallo, Ik ben Eline van Straten, 19 jaar, tweedejaars student Creative Media en Game
                                Technologies aan de Hogeschool Rotterdam.
                            </p>
                            <div>
                                <h4 className={"text-3xl"}><span className={"text-accent"}>✦</span> Mijn creatieve
                                    ontwikkeling</h4>
                                <p className={"text-lg leading-relaxed"}>
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
                                <h4 className={"text-3xl"}><span className={"text-accent"}>✦</span> Mijn passie voor
                                    dans
                                </h4>
                                <p className={"text-lg leading-relaxed"}>
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
                                <h4 className={"text-3xl"}><span className={"text-accent"}>✦</span> Op Zoek naar een
                                    Meeloopstage
                                </h4>
                                <p className={"text-lg leading-relaxed"}>
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
                    </div>

                    <div className={"flex flex-row gap-8 w-full"}>
                        <div className={"flex flex-col gap-4 flex-1"}>
                            <h4 className={"text-4xl mb-2 text-center md:text-left"}>Skills</h4>
                            <div className={"flex flex-row gap-4 justify-center md:justify-start flex-wrap"}>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/html.png"} alt={"html"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/css.png"} alt={"css"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/js.png"} alt={"js"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/php.png"} alt={"php"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/laravel.webp"}
                                     alt={"laravel"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/react.png"} alt={"react"}/>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4 flex-1"}>
                            <h4 className={"text-4xl text-center md:text-left"}>Andere tools</h4>
                            <div className={"flex flex-row gap-4 justify-center md:justify-start flex-wrap"}>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/photoshop.png"}
                                     alt={"adobe photoshop"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/illustrator.webp"}
                                     alt={"adobe illustrator"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/videostar.png"}
                                     alt={"videostar"}/>
                                <img className={"w-25 h-25 object-contain"} src={"/skills/imovie.png"}
                                     alt={"imovie"}/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={"min-h-screen flex px-8"} id={"mijn-projecten"}>
                <div className={"flex flex-col gap-16"}>
                    <h3 className={"text-6xl"}>Mijn projecten</h3>
                    <div className={"grid sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
                        <ProjectCard
                            link={"/poppy"}
                            image={"/projects/poppy/poppy.png"}
                            title={"Poppy"}
                            description={"een muziek applicatie gemaakt om mensen uit hun muziekbubbel te halen doormiddel van een transparant Algoritme."}
                            date={"19 maart 2026"}
                            tags={["React", "Javascript", "Tailwind CSS"]}
                        />

                        <ProjectCard
                            link={"/natureParksFront"}
                            image={"/projects/natureParks/natureParks.png"}
                            title={"Nature Parks front-end"}
                            description={"Een applicatie met een verzameling van verschillende natuur parken in de Verenigde Staten."}
                            date={"27 januari 2026"}
                            tags={["React", "Javascript", "Vite", "Tailwind CSS"]}
                        />

                        <ProjectCard
                            link={"/natureParksBack"}
                            image={"/projects/natureParks/express.png"}
                            title={"Nature Parks back-end"}
                            description={"Een RESTful webservice met als data een verzameling van verschillende natuur parken uit de Verenigde Staten."}
                            date={"27 januari 2026"}
                            tags={["Express", "Mongoose", "MongoDB"]}
                        />

                        <ProjectCard
                            link={"/natuurQuest"}
                            image={"/projects/natuurQuest/natuurquest.png"}
                            title={"NatuurQuest"}
                            description={"een webapplicatie waar gezinnensamen een spel van 30 seconds over de natuur in de natuur kunnen spelen."}
                            date={"18 december 2025"}
                            tags={["Laravel", "Blade", "Php", "Tailwind CSS"]}
                        />

                    </div>

                </div>
            </section>

            <section className={"flex px-8 pb-10"} id={"contact"}>
                <div className={"flex flex-col gap-16"}>
                    <h3 className={"text-6xl"}>Contact</h3>
                    <div className={"flex flex-row gap-10 justify-center"}>
                        <div className={"flex flex-col"}>
                            <h4 className={"text-3xl"}><span className={"text-accent"}>✦</span> Email:</h4>
                            <p className={"inline-block bg-primary rounded-full px-5 py-3 text-body"}>Elinevanstr@gmail.com</p>
                        </div>
                        <div>
                            <h4 className={"text-3xl"}><span className={"text-accent"}>✦</span> Github:</h4>
                            <a href={"https://github.com/eline-vanstraten"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>eline-vanstraten</a>
                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}

export default Index;