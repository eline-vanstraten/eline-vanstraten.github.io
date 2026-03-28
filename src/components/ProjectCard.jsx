import {useNavigate} from "react-router";

function ProjectCard({link, image, title, description, date, tags}) {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(link)}
             className={"max-w-sm rounded h-full overflow-hidden shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"}>
            <img src={image} className={"w-full h-50 object-cover"} alt={title}/>
            <div className={"px-6 py-4 flex-grow"}>
                <h4 className={"text-3xl"}>{title}</h4>
                <p className={"text-base text-black!"}>{description}</p>
                <p className={"text-base text-gray-500"}>{date}</p>
            </div>
            <div className={"px-6 pt-4 pb-2 mt-auto"}>
                {tags.map(tag => (
                    <span
                        key={tag}
                        className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}>{tag}</span>

                ))}
            </div>
        </div>

    )
}

export default ProjectCard;