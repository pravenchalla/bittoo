import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to = '/signup'>SignUp</Link>
                </li>
                <li>
                    <Link to = '/login'>LogIn</Link>
                </li>
                <li>
                    <Link to ='/View'>Show user</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;