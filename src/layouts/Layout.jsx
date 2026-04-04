import {Link, Outlet} from "react-router";
import {useState} from "react";
import ScrollToHash from "../components/ScrollToHash.jsx";

function Layout() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen flex flex-col">

                <header
                    className={"sticky top-0 bg-primary px-4 py-3 z-50 border-b border-accent"}>
                    <div className={"items-center justify-between max-w-7xl mx-auto flex"}>
                        <div className={"flex items-center gap-3"}>
                            <img src={"/logoEline.png"} alt={"Logo with initials E V S."} className={"h-8 sm:h-10"}/>
                            <p className={"text-sm text-body"}>Portfolio / Eline van Straten
                                / {new Date().getFullYear()}</p>


                        </div>
                        <div className={"hidden md:flex items-center gap-8"}>
                            <Link to={"/#home"} className={"text-body hover:underline"}>Home</Link>
                            <Link to={"/#over-mij"} className={"text-body hover:underline"}>Over mij</Link>
                            <Link to={"/#mijn-projecten"} className={"text-body hover:underline"}>Mijn projecten</Link>
                            <Link to={"/#contact"} className={"text-body hover:underline"}>Contact</Link>
                        </div>

                        {/*mobile*/}
                        <button
                            className="md:hidden flex flex-col gap-1"
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="w-6 h-0.5 bg-body"></span>
                            <span className="w-6 h-0.5 bg-body"></span>
                            <span className="w-6 h-0.5 bg-body"></span>
                        </button>
                    </div>

                    {menuOpen && (
                        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4">
                            <Link to="/#home" onClick={() => setMenuOpen(false)} className={"text-body"}>Home</Link>
                            <Link to="/#over-mij" onClick={() => setMenuOpen(false)} className={"text-body"}>Over
                                mij</Link>
                            <Link to="/#mijn-projecten" onClick={() => setMenuOpen(false)} className={"text-body"}>Mijn
                                projecten</Link>
                            <Link to="/#contact" onClick={() => setMenuOpen(false)}
                                  className={"text-body"}>Contact</Link>
                        </div>
                    )}


                </header>
                {/*<div className="mx-auto max-w-7xl ">*/}
                <main className={"flex-1 w-full mx-auto"}>
                    <ScrollToHash/>
                    <Outlet/>
                </main>
                {/*</div>*/}
                <footer
                    className={"bg-stone-800 text-center text-body py-4 text-sm border-t border-accent"}>&copy; Portfolio
                    / Eline van Straten
                    / {new Date().getFullYear()}
                </footer>

            </div>
        </>
    )
}

export default Layout;