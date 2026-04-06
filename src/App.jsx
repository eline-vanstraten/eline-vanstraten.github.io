import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./layouts/Layout.jsx";
import Index from "./pages/Index.jsx";
import Poppy from "./pages/projects/Poppy.jsx";
import NatureParksFront from "./pages/projects/NatureParksFront.jsx";
import NatureParksBack from "./pages/projects/NatureParksBack.jsx";
import NatuurQuest from "./pages/projects/NatuurQuest.jsx";
import Projects from "./pages/website/Projects.jsx";
import AboutMe from "./pages/website/AboutMe.jsx";
import KpopGroups from "./pages/projects/KpopGroups.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Index/>
            },
            {
                path: "/poppy",
                element: <Poppy/>
            },
            {
                path: "/natureParksFront",
                element: <NatureParksFront/>
            },
            {
                path: "/natureParksBack",
                element: <NatureParksBack/>
            },
            {
                path: "/natuurQuest",
                element: <NatuurQuest/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/aboutMe",
                element: <AboutMe/>
            },
            {
                path: "/kpopGroups",
                element: <KpopGroups/>
            },
            {
                path: "*",
                element: (
                    <main className={"text-center mx-auto max-w-7xl mt-20"}>
                        <h1 className={"text-4xl sm:text-4xl md:text-5xl lg:text-6xl"}>404</h1>
                        <p className={"mt-4"}>Oops! De pagina die je zocht bestaat niet.</p>
                    </main>
                )
            },
        ]
    }
]);


function App() {

    return <RouterProvider router={router}/>
}

export default App