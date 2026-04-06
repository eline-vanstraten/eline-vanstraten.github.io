import ProjectCard from "../components/ProjectCard.jsx";
import {Link} from "react-router";
import SkillSection from "../components/SkillSection.jsx";


function Index() {

    return (
        <>
            <section className={"relative h-auto flex"} id={"home"}>
                {/*mobile*/}
                <div className={"absolute inset-0 md:hidden"}>
                    <img className={"h-full w-full object-cover opacity-40"} src={"/background.jpeg"}
                         alt={"me programming an html css project on the computer"}/>
                </div>

                {/*desktop*/}
                <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center">
                    <div
                        className={"flex flex-col  text-center md:text-left gap-6 md:w-1/2 justify-center px-8"}>
                        <div className={"flex justify-center pt-10"}>
                            <img className={"w-40 h-50 md:w-52 md:h-62 rounded-full object-cover"} src={"/myself1.jpeg"}
                                 alt={"me"}/>
                        </div>
                        <div className={"pt-5"}>
                            <h1 className={"text-4xl sm:text-6xl lg:text-7xl"}>Creative Developer</h1>
                            <h2 className={"font-gabriela text-3xl sm:text-5xl lg:text-6xl"}>PORTFOLIO</h2>
                        </div>

                    </div>
                    <div className={"hidden md:block md:w-1/2"}>
                        <img className={"h-screen w-full object-cover"} src={"/background.jpeg"}
                             alt={"me programming an html css project on the computer"}/>
                    </div>
                </div>
            </section>


            <section className={"h-auto px-8 py-8 mt-10 mx-auto"}>
                <div className={"flex flex-col lg:flex-row gap-8 "}>

                    <div className={"flex flex-col gap-4 text-base sm:text-lg leading-relaxed"}>
                        <p>
                            Hallo, Ik ben Eline van Straten, 19 jaar en tweedejaars student Creative Media en Game
                            Technologies aan de Hogeschool Rotterdam.
                        </p>
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
                        <div className={"flex justify-center md:justify-start"}>
                            <Link to={"/aboutMe"}
                                  className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary cursor-pointer"}>Over
                                mij
                            </Link>
                        </div>
                    </div>

                    <div className={"flex flex-row lg:flex-col justify-center gap-4"}>
                        <div className={"w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden"}>
                            <img className={"w-full h-full object-cover object-bottom scale-250"}
                                 src={"/myself2.jpeg"} alt={"me"}/>
                        </div>
                    </div>

                </div>
                <SkillSection/>

            </section>

            <section className={"h-auto px-8 py-8 mx-auto"} id={"mijn-projecten"}>
                <h3 className={"text-3xl sm:text-5xl pb-5"}>Mijn projecten</h3>

                {/*<div className={"flex flex-col gap-16"}>*/}
                <div className={"flex justify-center"}>
                    <div className={" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
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
                            image={"/projects/natureParks/natureParksBegin.png"}
                            title={"Nature Parks front-end"}
                            description={"Een applicatie met een verzameling van verschillende natuur parken in de Verenigde Staten."}
                            date={"27 januari 2026"}
                            tags={["React", "Javascript", "Vite", "Tailwind CSS"]}
                        />

                        <ProjectCard
                            link={"/natureParksBack"}
                            image={"/projects/natureParks/express.png"}
                            title={"Nature Parks back-end"}
                            description={"Een RESTful webservice met als data een verzameling van verschillende natuur parken in de Verenigde Staten."}
                            date={"27 januari 2026"}
                            tags={["Express", "Node.js", "Mongoose", "MongoDB"]}
                        />

                        <ProjectCard
                            link={"/natuurQuest"}
                            image={"/projects/natuurQuest/natuurquest.png"}
                            title={"NatuurQuest"}
                            description={"een webapplicatie waar gezinnen samen een spel van 30 seconds over de natuur in de natuur spelen."}
                            date={"18 december 2025"}
                            tags={["Laravel", "Blade", "Php", "Breeze", "Tailwind CSS"]}
                        />

                    </div>
                </div>
                <div className={"flex justify-center mt-10"}>
                    <Link to={"/projects"}
                          className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary cursor-pointer"}>Meer
                        projecten
                    </Link>
                </div>

                {/*</div>*/}
            </section>

            <section className={"px-8 py-8 mx-auto pb-10"} id={"contact"}>
                <h3 className={"text-3xl sm:text-5xl pb-5"}>Contact</h3>
                <p className={"text-base sm:text-lg pb-5"}>
                    Interesse of vragen? Neem contact met mij op!
                </p>
                <div className={"flex flex-col gap-16"}>

                    <div
                        className={"flex flex-col justify-center md:flex-row gap-6 md:gap-12 items-center md:items-start"}>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}> Email:</h4>
                            <a href="mailto:elinevanstr@gmail.com"
                               className={"inline-block bg-primary rounded-full px-5 py-3 mt-2 text-body hover:bg-secondary"}>elinevanstr@gmail.com</a>
                        </div>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}> Github:</h4>
                            <a href={"https://github.com/eline-vanstraten"} target="_blank" rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 mt-2 text-body hover:bg-secondary"}>eline-vanstraten</a>
                        </div>
                        <div>
                            <h4 className={"text-2xl sm:text-3xl"}> LinkedIn:
                            </h4>
                            <a href={"https://www.linkedin.com/in/eline-van-straten-8585403a9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bze5g1kwPQyyMJRIrAc7KUQ%3D%3D"}
                               target="_blank" rel="noopener noreferrer"
                               className={"inline-block bg-primary rounded-full px-5 py-3 mt-2 text-body hover:bg-secondary"}>Eline
                                van Straten</a>
                        </div>
                        <div>
                            <img className={"w-20 h-20 md:w-32 md:h-32 flex-shrink-0 object-contain"}
                                 src={"/logoEline.png"}
                                 alt={"Logo with initials E V S."}/>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Index;