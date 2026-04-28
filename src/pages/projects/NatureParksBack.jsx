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
                            <p><span className={"text-accent"}>✦</span> Individuele
                                schoolopdracht (Fullstack Web Development)</p>
                            <p><span className={"text-accent"}>✦</span> Een RESTful webservice ontwikkeld binnen Express
                                waarin natuurparken uit de VS worden opgeslagen. Deze wordt getoond in mijn{" "}
                                <Link to={"/natureParksFront"}
                                      className="text-primary underline hover:text-secondary">React project</Link>.
                            </p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Gebruikte technologieën:</h2>
                            <div className={"flex flex-wrap gap-2 mt-2"}>
                        <span
                            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Express</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Node.js</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Mongoose</span>
                                <span
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ MongoDB</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Het project is gemaakt
                                in het tweede jaar CMGT aan Hogeschool Rotterdam voor het vak Fullstack Web Development,
                                waarbij ik werkte met Express.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Ik heb geleerd om een RESTful API te bouwen.
                            </p>
                            <p><span className={"text-accent"}>✦</span> Ik kan Postman gebruiken voor het testen van
                                JSON-responses.</p>
                            <p><span className={"text-accent"}>✦</span> Ik kan een Fullstack applicatie maken met de
                                front-end en
                                back-end gescheiden van elkaar.</p>
                            <p><span className={"text-accent"}>✦</span> Ik kan CORS toe passen.</p>
                            <h2 className={"text-2xl sm:text-3xl"}>Aabevelingen</h2>
                            <p><span className={"text-accent"}>✦</span>De SEED bevat nu altijd dezelfde data: een array
                                zou in de toekomst meer variatie kunnen bieden.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/eline-vanstraten/nature-parks-backend"} target="_blank"
                               rel="noopener noreferrer"
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