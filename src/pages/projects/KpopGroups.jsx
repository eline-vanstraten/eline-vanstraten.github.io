import {useEffect} from "react";
import {Link} from "react-router";

function KpopGroups() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: K-Pop Groups</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Individuele
                                schoolopdracht (Web Application Frameworks)</p>
                            <p><span className={"text-accent"}>✦</span> Een webapplicatie ontwikkeld binnen het Laravel
                                MVC (Model-View-Controller) Framework waarin je op een
                                overzichtelijke manier uit de database verkregen K-Pop groepen kan bekijken en beheren.
                            </p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Laravel</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Blade</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Php</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Breeze</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Tailwind CSS</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het tweede jaar van de
                                opleiding CMGT aan de Hogeschool Rotterdam voor het vak Web Application Frameworks. Dit
                                was een
                                individuele opdracht waarin ik met Laravel en Tailwind CSS aan de slag ben gegaan.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Leren werken met een MVC framework en het
                                scheiden van verantwoordelijkheden.</p>
                            <p><span className={"text-accent"}>✦</span> Werken met Eloquent ORM om het werken met
                                databaserecords te vereenvoudigen.</p>
                            <p><span className={"text-accent"}>✦</span>OWASP-richtlijnen toegepast voor de beveiliging
                                van de applicatie.</p>
                            <p><span className={"text-accent"}>✦</span>Leren over de OTAP-methode voor een professioneel
                                werkproces.</p>
                            <p><span className={"text-accent"}>✦</span>Als verbeterpunt zou ik voor een volgende keer de
                                functionaliteit toevoegen dat je een groep favoriet kan maken en dit kan zien in je
                                profiel.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/eline-vanstraten/kpop-groups"} target="_blank"
                               rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                        </div>


                    </div>
                    <div
                        className={"grid grid-cols-1 gap-4 w-full mx-auto lg:max-w-2xl"}>
                        <img src={"/projects/kpopGroups/kpopGroupsHome.png"} alt={"Kpop groups home page"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/kpopGroups/kpopGroupsFilter.png"} alt={"Kpop groups filtered home page"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/kpopGroups/kpopGroupsDetail.png"} alt={"Kpop groups detail page"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/kpopGroups/kpopGroupsAdmin.png"} alt={"Kpop groups admin page"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>

                    </div>

                </div>
            </section>

        </>
    )
}

export default KpopGroups;