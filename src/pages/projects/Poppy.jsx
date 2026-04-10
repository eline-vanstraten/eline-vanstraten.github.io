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
                                applicatie, ontwikkeld in React, die gebruikers helpt nieuwe muziek te ontdekken via
                                aanbevelingen op basis van genrevoorkeuren. Transparantie over het algoritme vergroot
                                AI-geletterdheid en laat zien waarom nummers worden aanbevolen.</p>
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
                            <p><span className={"text-accent"}>✦</span> Het project, uitgevoerd tijdens het tweede jaar
                                CMGT aan Hogeschool Rotterdam, bestond uit front-end en back-end teams. Ik werkte mee
                                als lid van het front-end team en heb veel geleerd over React, onder andere hoe
                                onderdelen samenwerken en hoe je interactieve functies zoals muziekkaarten swipen
                                implementeert.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Samenwerken met verschillende teams verbeterde
                                mijn communicatieve vaardigheden. Ik zie het belang van elkaar goed op de hoogte houden
                                en feedback geven over wat we van elkaar nodig hebben.</p>
                            <h2 className={"text-2xl sm:text-3xl"}>Aanbevelingen</h2>
                            <p><span className={"text-accent"}>✦</span>Nog meer visualiseren van muziekkaarten, zoals
                                speelser maken en visueel mooier maken.</p>
                            <p><span className={"text-accent"}>✦</span> Het toevoegen van meer factoren (naast genres)
                                aan de aanbevelingen om zo de beleving nog beter te maken.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/semvde/Poppy-Front_end"} target="_blank"
                               rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                            <a href={"http://145.24.237.244/"} target="_blank" rel="noopener noreferrer"
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