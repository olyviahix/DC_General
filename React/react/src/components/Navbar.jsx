import {Link} from 'react-router-dom';


const NavBar = () =>{
    return(
        <div class='nav'>

            <Link to="/LapTime">Laps!</Link>
            <Link to="/Contact">Contact Us</Link>
            
        </div>
    )
}

export default NavBar;