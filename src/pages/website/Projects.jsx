import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";
import {useEffect} from "react";

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"h-auto px-8 py-8 mx-auto"} id={"mijn-projecten"}>
                <h3 className={"text-3xl sm:text-5xl pb-5"}>Mijn projecten</h3>

                {/*<div className={"flex justify-start mb-10"}>*/}
                {/*    <Link to={"/#mijn-projecten"}*/}
                {/*          className={"inline-block bg-primary rounded-full px-3 py-1 text-body hover:bg-secondary cursor-pointer"}>Ga*/}
                {/*        terug*/}
                {/*    </Link>*/}
                {/*</div>*/}

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

                        <ProjectCard
                            link={"/kpopGroups"}
                            image={"/projects/kpopGroups/kpopGroupsHome.png"}
                            title={"K-Pop Groups"}
                            description={"Een webapplicatie waarin je op een overzichtelijke manier uit de database verkregen K-Pop groepen kan bekijken en beheren."}
                            date={"31 oktober 2025"}
                            tags={["Laravel", "Blade", "Php", "Breeze", "Tailwind CSS"]}
                        />

                    </div>
                </div>

            </section>
        </>
    )
}

export default Projects;