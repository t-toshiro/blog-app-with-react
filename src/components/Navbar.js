
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home</Link>
            {isAuth ? (
                <>
                    <Link to="/createpost" >
                        <FontAwesomeIcon icon={faFilePen} />
                        Post</Link>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        Logout</Link>
                </>
            ) : (
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    Login</Link>)}


        </nav>
    )
}

export default Navbar