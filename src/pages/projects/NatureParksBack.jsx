import {Link} from "react-router";
import {useEffect} from "react";

function NatureParksBack() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: Nature Parks back-end</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Individueel
                                schoolproject (Fullstack Web Development)</p>
                            <p><span className={"text-accent"}>✦</span> Dit is de back-end van
                                mijn project Nature
                                Parks. Het bestaat uit mijn eigen RESTful webservice waar een verzameling van
                                verschillende
                                natuur parken uit de Verenigde Staten in staan. De informatie wordt in mijn{" "}
                                <Link to={"/natureParksFront"}
                                      className="text-primary underline hover:text-secondary">React project</Link>{" "}getoond.
                            </p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Express</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Mongoose</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ MongoDB</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het tweede jaar van de
                                opleiding CMGT aan de Hogschool Rotterdam voor het vak programmeren 6. Dit was een
                                individuele opdracht waarin ik met Express aan de slag ben gegaan.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Tijdens deze opdracht
                                heb ik geleerd hoe ik mijn eigen webservice kan bouwen met behulp van Express. </p>
                            <p><span className={"text-accent"}>✦</span> Daarnaast heb ik
                                Postman
                                leren gebruiken om te checken dat mijn webservice daadwerkelijk werkt.</p>
                            <p><span className={"text-accent"}>✦</span>Waar ik nu een
                                verbetering in zie is het gebruik van CORS nog beter onder de knie krijgen. </p>
                            <p><span className={"text-accent"}>✦</span>Daarnaast bevat de SEED
                                nu altijd hetzelfde als data. Voor een volgende keer kan ik hier een array in zetten
                                waardoor er meer gevarieerde informatie in de SEED zit.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/eline-vanstraten/nature-parks-backend"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default NatureParksBack;