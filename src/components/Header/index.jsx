import NavBar from "./NavBar";
import UserNav from "./UserNav";
import "./index.css"

const Header = () =>{
    return (
        <nav>
            <NavBar/>
            <UserNav/>
        </nav>
    );
};

export default Header;