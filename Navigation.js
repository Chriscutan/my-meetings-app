import navigation from '../navigation/Navigation.css';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <div className="navbar">
            <h2 className='logo'>MyMeetings</h2>
            <div className='nav'>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/schedule" className='nav-link'>Schedule Meetings</Link></li>
                <li><Link to="/register" className='nav-link'>Register</Link></li>
                <li><Link to="/login" className='nav-link'>Login</Link></li>
            </div>
        </div>
    );
}

export default Navigation;