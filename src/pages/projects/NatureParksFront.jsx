import {useEffect} from "react";
import {Link} from "react-router";

function NatureParksFront() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: Nature Parks front-end</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Individuele
                                schoolopdracht (Fullstack Web Development)</p>
                            <p><span className={"text-accent"}>✦</span> De front-end van
                                mijn project Nature
                                Parks. Het bestaat uit een applicatie ontwikkeld in React met een verzameling van
                                verschillende natuur
                                parken
                                in de Verenigde Staten. De informatie wordt uit mijn eigen{" "}
                                <Link to={"/natureParksBack"}
                                      className="text-primary underline hover:text-secondary"> RESTful
                                    webservice</Link>{" "}
                                gehaald. Je kan parken bekijken, favoriet maken, toevoegen, wijzigen en
                                verwijderen.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ React</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ JavaScript</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Vite</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Tailwind CSS</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het tweede jaar van de
                                opleiding CMGT aan de Hogschool Rotterdam voor het vak Fullstack Web Development. Dit
                                was een
                                individuele opdracht waarin ik met React en Tailwind CSS aan de slag ben gegaan.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Leren werken met Routes vanaf een single page
                                applicatie.</p>
                            <p><span className={"text-accent"}>✦</span> Werken met Componenten en Props om waarden door
                                te geven.</p>
                            <p><span className={"text-accent"}>✦</span> Gebruik van Fetch (Asynchroon JavaScript) om
                                data op te halen en te bewerken.</p>
                            <p><span className={"text-accent"}>✦</span> Leren werken met States voor het beheren van
                                gegevens die veranderen.</p>
                            <p><span className={"text-accent"}>✦</span>Waar ik nu een
                                verbetering in zie is het
                                effectiever omgaan met het fetchen van informatie uit de webservice. Voor elke pagina
                                waar informatie nodig is doe ik nu elke keer een fetch maar dat kan ik de volgende keer
                                op een
                                slimmere manier aanpakken door een javascript bestand te gebruiken en die steeds aan te
                                roepen. </p>
                            <p><span className={"text-accent"}>✦</span>Daarnaast had ik nog wat
                                extra onderdelen willen
                                toevoegen zoals file upload en registratie / log in.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/eline-vanstraten/nature-parks-frontend"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                        </div>


                    </div>
                    <div
                        className={"grid grid-cols-1 gap-4 w-full mx-auto lg:max-w-2xl"}>
                        <img src={"/projects/natureParks/natureParksBegin.png"} alt={"Nature parks beginning page"}
                             className={"w-fit h-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/natureParks/natureParksDetail.png"} alt={"Detail of nature park"}
                             className={" w-full h-auto object-contain rounded-lg shadow-md"}/>

                    </div>

                </div>
            </section>

        </>
    )
}

export default NatureParksFront;