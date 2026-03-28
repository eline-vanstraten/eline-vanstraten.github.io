import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <>
            <div className="min-h-screen flex flex-col">

                <header
                    className={"sticky top-0 bg-primary px-3 py-2.5 z-50 outline-solid outline-accent"}>
                    <div className={"hidden items-center justify-between max-w-400 mx-auto sm:flex"}>
                        <div className={"flex items-center gap-5"}>
                            <img src="/logoEline.png" alt="" className={"h-10"}/>
                            <p className={"text-body"}>Portfolio / Eline van Straten / {new Date().getFullYear()}</p>


                        </div>
                        <div className={"flex items-center gap-10"}>
                            <a href={"/#home"} className={"text-body hover:underline"}>Home</a>
                            <a href={"/#over-mij"} className={"text-body hover:underline"}>Over mij</a>
                            <a href={"/#mijn-projecten"} className={"text-body hover:underline"}>Mijn projecten</a>
                            <a href={"/#contact"} className={"text-body hover:underline"}>Contact</a>
                        </div>
                    </div>
                </header>
                {/*<div className="mx-auto max-w-7xl ">*/}
                <main className={"flex-1"}>
                    <Outlet/>
                </main>
                {/*</div>*/}
                <footer
                    className={"left-0 right-0 bottom-0 h-16 bg-stone-800 text-body text-center px-3 py-3 outline-solid outline-accent"}>&copy; Portfolio
                    / Eline van Straten
                    / {new Date().getFullYear()}
                </footer>

            </div>
        </>
    )
}

export default Layout;