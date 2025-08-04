import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        })
    }
    return (
        <div>
            <p>Log out</p>
            <button onClick={logout}>Log out</button>

        </div>
    )
}

export default Logout