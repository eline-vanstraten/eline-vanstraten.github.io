import {useEffect} from "react";

function NatuurQuest() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className={"flex flex-col px-4 sm:px-8 pb-10 gap-7"}>
                <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>Project: NatuurQuest</h1>
                <div className={"flex flex-col lg:flex-row gap-6"}>
                    <div
                        className={"flex flex-col gap-6 bg-body/5 rounded-2xl shadow-lg px-4 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={"text-accent"}>✦</span> Schoolproject voor een klant</p>
                            <p><span className={"text-accent"}>✦</span> NatuurQuest is een webapplicatie, gemaakt in
                                opdracht van NatuurMonumenten en IO, waar gezinnen
                                samen een spel van 30 seconds over de natuur in de natuur kunnen spelen. </p>
                            <p><span className={"text-accent"}>✦</span> Het doel van NatuurQuest is om 12-14 jarigen en
                                hun gezinnen op een speelse manier de natuur in te brengen, ze leren waarom de natuur
                                belangrijk is en hoe zij zelf kunnen helpen om de natuur te beschermen.</p>
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
                                    className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> ✦ Tailwind CSS</span>
                            </div>
                        </div>

                        <div>
                            <p><span className={"text-accent"}>✦</span> Dit project is gemaakt
                                in het tweede jaar van de opleiding CMGT aan de Hogschool Rotterdam tijdens Tailored
                                Learning Enviroment 2. Ik heb hier met een kleine groep aan gewerkt.</p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Tijdens dit project heb
                                ik veel geleerd over Laravel en Blade en hoe ik het kan gebruiken. Zo heb ik het 30
                                seconds spel gemaakt dat elke keer random 5 natuur woorden geeft maar de gegeven woorden
                                wel onthoud voor de spelleider om na te kijken. </p>
                            <p><span className={"text-accent"}>✦</span> Daarnaast heb ik
                                geleerd hoe het is om voor een echte opdrachtgever een applicatie te maken. Hierdoor heb
                                ik kennis opgedaan over hoe je jezelf en als team professioneel opstelt tegenover de
                                klant en hoe je goed communiceert met je klant.</p>
                            <p><span className={"text-accent"}>✦</span>Waar ik nu een
                                verbetering in zie is uitleg tonen bij de woorden van het spel. Op deze manier kan je
                                ervoor zorgen dat het een nog informatiever spel wordt. </p>
                            <p><span className={"text-accent"}>✦</span>Daarnaast zie ik nog verbetering in de styling
                                van bepaalde bladzijdes voor mobile gebruik zoals bij de uitleg over het 30 seconds
                                spel. Hier had net zoals bij de desktop versie ook een blauw kader omheen gemogen wat de
                                leesbaarheid zou vergroten.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/martijnsark/natuur-quest"}
                               className={"inline-block bg-primary rounded-full px-5 py-3 text-body hover:bg-secondary"}>Bekijk
                                op Github</a>

                        </div>


                    </div>
                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto lg:max-w-2xl"}>
                        <img src={"/projects/natuurQuest/natuurQuestBegin.png"} alt={"NatuurQuest begin game"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/natuurQuest/natuurQuestGame.png"} alt={"NatuurQuest 30 seconds game"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/natuurQuest/natuurQuestScore.png"} alt={"NatuurQuest score after game"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                        <img src={"/projects/natuurQuest/natuurQuestGameDone.png"} alt={"NatuurQuest game done"}
                             className={"w-fit h-auto max-w-[200px] mx-auto object-contain rounded-lg shadow-md"}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NatuurQuest;