import {Link} from "react-router-dom";
import "./index.css";

const Footer = () => {
    return (<footer>
        <ul>
            <li>&copy; Copyright 2022</li>
            <li className="contacts">
                <Link to="https://github.com/TanyaAng/"><i className="fa-brands fa-github"></i> Tanya Angelova</Link>
            </li>
        </ul>
    </footer>);

};

export default Footer;