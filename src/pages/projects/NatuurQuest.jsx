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
                            <p><span className={"text-accent"}>✦</span> Groeps schoolproject voor een klant (Tailored
                                Learning Environment)</p>
                            <p><span className={"text-accent"}>✦</span> We ontwikkelden een webapplicatie in opdracht
                                van NatuurMonumenten en IO, binnen het Laravel Framework. Gezinnen spelen samen een "30
                                seconds" natuurspel buiten. Het doel: 12-14 jarigen en hun gezinnen spelenderwijs leren
                                over het belang van de natuur en hoe je die kunt beschermen.</p>
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
                            <p><span className={"text-accent"}>✦</span> Dit project voerden we uit in het tweede jaar
                                van CMGT aan Hogeschool Rotterdam met vijf personen.
                            </p>
                        </div>

                        <div>
                            <h2 className={"text-2xl sm:text-3xl"}>Inzichten</h2>
                            <p><span className={"text-accent"}>✦</span> Ik heb veel geleerd over Laravel en Blade, zoals
                                het maken van het 30 seconds-spel dat willekeurig natuurwoorden selecteert en de
                                gebruikte woorden onthoudt.</p>
                            <p><span className={"text-accent"}>✦</span> Ook deed ik ervaring op met applicaties bouwen
                                voor een echte opdrachtgever, samenwerken en communiceren met de klant.
                            </p>
                            <h2 className={"text-2xl sm:text-3xl"}>Aanbevelingen</h2>
                            <p><span className={"text-accent"}>✦</span>Uitleg toevoegen bij de spelwoorden.</p>
                            <p><span className={"text-accent"}>✦</span>Betere mobiele styling, zoals een blauw kader
                                rond de uitlegpagina's voor leesbaarheid.</p>
                        </div>

                        <div className={"flex flex-col sm:flex-row gap-4 justify-center mb-3"}>
                            <a href={"https://github.com/martijnsark/natuur-quest"} target="_blank"
                               rel="noopener noreferrer"
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