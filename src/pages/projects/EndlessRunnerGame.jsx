import {Link} from "react-router";
import {useEffect} from "react";

function EndlessRunnerGame() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: Endless Runner Game</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Individuele
                                schoolopdracht (Object Oriented Game Development)</p>
                            <p><span className={"text-accent"}>✦</span> Een endless runner game ontwikkeld met
                                Excalibur. Het doel is om de gebroken hartjes te ontwijken en zo lang mogelijk in leven
                                te blijven. Verzamel een rode sjaal zodra je een leven kwijt raakt.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Excalibur</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ JavaScript</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het eerste jaar van de
                                opleiding CMGT aan de Hogeschool Rotterdam voor het vak Object Oriented Game
                                Development. Dit
                                was een
                                individuele opdracht waarin ik met Excalibur aan de slag ben gegaan.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Kennisgemaakt met OOP principes en de opbouw van
                                een game visualiseren in een klassendiagram.</p>
                            <p><span className={"text-accent"}>✦</span> Leren over OOP principes "Composition,
                                Encapsulation en Inheritance" en deze implementeren in mijn game.</p>
                            <p><span className={"text-accent"}>✦</span> Leren toepassen van game development technieken
                                zoals collision detection.</p>
                            <p><span className={"text-accent"}>✦</span> Zelf de pixel art gemaakt van het karakter,
                                gebroken hart en sjaal.</p>
                            <p><span className={"text-accent"}>✦</span>Waar ik nu een
                                verbetering in zie is nog meer variatie toevoegen aam de game. Dit kan door bijvoorbeeld
                                vliegende obstakels toe te
                                voegen.
                            </p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/eline-vanstraten/endless-runner-game"} target="_blank"
                               rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                            <a href={"https://eline-vanstraten.github.io/endless-runner-game/"} target="_blank"
                               rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Speel
                                nu</a>
                        </div>


                    </div>
                    <div
                        className={"grid grid-cols-1 gap-4 w-full mx-auto lg:max-w-2xl"}>
                        <img src={"/projects/endlessRunnerGame/endlessRunner.png"} alt={"Endless runner game"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/endlessRunnerGame/endlessRunnerAction.png"}
                             alt={"Endless runner game jump"}
                             className={" w-full h-auto object-contain rounded-lg shadow-md"}/>

                    </div>

                </div>
            </section>
        </>
    )
}

export default EndlessRunnerGame;