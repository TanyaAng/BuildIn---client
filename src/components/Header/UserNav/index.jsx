import {Link} from "react-router-dom";

const UserNav = () =>{
    return (
    <ul className="username-ctr">
    <li className="username-item">
        <Link to="/accounts/profile">
            <i className="fa-solid fa-user"></i>
            <span className="username"> Pesho</span>
        </Link>
    </li>
    <li className="logout-item">
        <Link to="/logout">Logout</Link>
    </li>
</ul>);
};


export default UserNav;

