import {Link} from 'react-router-dom';

const NavBar = () => {
return (
    <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects/add">Add Project</Link></li>
        <li><Link to="/accounts/profile">Profile</Link></li>
        <li><Link to="/logactivity">Log Activity</Link></li>
    </ul>
);
};

export default NavBar;