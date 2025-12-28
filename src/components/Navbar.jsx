
import { Link } from "react-router-dom"
import Union from "../assets/Union.png"
const navLinks = [
    { name: "About", url: "/about", },
    { name: "Contact", url: "/contact" }
]
export default function Navbar() {
    return (
        <nav className="w-11/12 mx-auto md:px-4 py-2 my-2 flex justify-between items-center transition-all duration-200">
            <Link to="/">
                <img src={Union} className="w-7 h-7 md:w-9 md:h-[30.57px] text-sm md:text-xl" alt="logo"/>
            </Link>
            <div className="flex gap-6"> 
                {
                    navLinks.map((link) => (
                        <Link key={link.url} to={link.url} className="text-sm md:text-base">
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}
