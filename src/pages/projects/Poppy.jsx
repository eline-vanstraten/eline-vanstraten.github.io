import {useEffect} from "react";

function Poppy() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: Poppy</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Groeps Schoolproject (Tailored Learning
                                Environment) </p>
                            <p><span className={"text-accent"}>✦</span> Poppy is een muziek
                                applicatie, ontwikkeld in React, gemaakt om mensen
                                uit hun muziekbubbel te halen. Je ontdekt nieuwe muziek doormiddel van aanbevelingen
                                gebaseerd op je genre voorkeuren. Door transparantie over het Algoritme dat hierachter
                                zit ontdek je ook waarom nummers aanbevolen worden en wat jouw muziekbubbel is.</p>
                            <p><span className={"text-accent"}>✦</span> Het doel van Poppy was
                                om een ethisch
                                verantwoord
                                AI-aanbevelingssysteem te maken waarmee we mensen uit hun muziek bubbel halen en de
                                AI-geletterdheid vergroten bij gebruikers door transparantie over het Algoritme.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ React</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ JavaScript</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Tailwind CSS</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het tweede jaar van de
                                opleiding CMGT aan de Hogschool Rotterdam tijdens Tailored Learning Enviroment
                                projectweken.
                                Tijdens dit project werdt er gewerkt in 2 verschillende teams: een front-end en back-end
                                team. Ik
                                was onderdeel van het front-end team van Poppy.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Tijdens dit project heb
                                ik veel geleerd over
                                React
                                en hoe ik het kan gebruiken. Zo heb ik geleerd hoe ik de muziek kaarten kan swipen en
                                daar als gebruiker feedback op krijg. </p>
                            <p><span className={"text-accent"}>✦</span> Daarnaast heb ik
                                geleerd om in een
                                andere samenstelling samen te werken. Door de scheiding in een front-end en back-end
                                team heb ik leren communiceren tussen 2 teams door elkaar goed op de hoogte te houden
                                met hoe we ervoor staan en wat we van elkaar nodig hebben.</p>
                            <p><span className={"text-accent"}>✦</span>Waar ik nu een
                                verbetering in zie is de styling
                                van de muziek kaarten. Ik kan daar een volgende keer meer diepte aan geven wat ze
                                speelser zal
                                maken en nog mooier visueel om te zien.</p>
                            <p><span className={"text-accent"}>✦</span>Daarnaast was het
                                interessant geweest om de
                                aanbevelingen niet alleen op de genre voorkeuren te baseren maar op meer factoren
                                waardoor de aanbevelingen nog gerichter gedaan konden worden.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/semvde/Poppy-Front_end"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                            <a href={"http://145.24.237.244/"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Live
                                versie</a>
                        </div>


                    </div>
                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto lg:max-w-2xl"}>
                        <img src={"/projects/poppy/poppySwipe.png"} alt={"Poppy swipe right"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/poppy/poppySwipe2.png"} alt={"Poppy swipe left"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/poppy/poppyRecommendation.png"} alt={"Poppy recommendation feature"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/poppy/poppyBubble.png"} alt={"Poppy bubble visualisation"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Poppy;