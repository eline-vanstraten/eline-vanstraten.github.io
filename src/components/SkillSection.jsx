function SkillSection() {
    return (
        <div className={"grid md:grid-cols-2 gap-10 mt-6"}>
            <div>
                <h4 className={"text-2xl sm:text-3xl pb-2 text-center md:text-left"}>Skills</h4>
                <p className={"text-gray-500 pb-2"}>HTML, CSS, JavaScript, PHP, Laravel, React</p>
                <div className={"flex flex-wrap gap-4 justify-center md:justify-start"}>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/html.png"} alt={"html"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/css.png"} alt={"css"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/js.png"} alt={"js"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/php.png"} alt={"php"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/laravel.webp"}
                         alt={"laravel"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/react.png"} alt={"react"}/>
                </div>
            </div>

            <div>
                <h4 className={"text-2xl sm:text-3xl pb-2 text-center md:text-left"}>Andere tools</h4>
                <p className={"text-gray-500 pb-2"}>Photoshop, Illustrator, VideoStar, IMovie, Github, Figma,
                    Canva</p>
                <div className={"flex flex-wrap gap-4 justify-center md:justify-start"}>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/photoshop.png"}
                         alt={"adobe photoshop"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/illustrator.webp"}
                         alt={"adobe illustrator"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/videostar.png"}
                         alt={"videostar"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/imovie.png"}
                         alt={"imovie"}/>
                    <img className={"w-25 h-25 object-cover"} src={"/skills/github.png"}
                         alt={"github"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/figma.png"}
                         alt={"figma"}/>
                    <img className={"w-25 h-25 object-contain"} src={"/skills/canva.png"}
                         alt={"canva"}/>
                </div>

            </div>
        </div>

    )
}

export default SkillSection;