
import maple from "../../maplel.ico";
import "./Navbar.scss";

export default function Navbar() {
    return (

        <nav className="navbar">
            <img src={maple} alt="maple" className="logo" />
            <ul className="nav-links">
                <li>
                    <a  href="/"className="nav-link">Home</a>
                </li>
                <li> 
                    <a  href="/"className="nav-link">About</a>
                </li>
                <li>
                    <a  href="/"className="nav-link active">Tours</a>
                </li>
            </ul>

        </nav>

    )
}