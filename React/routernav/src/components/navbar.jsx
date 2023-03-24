import {Link} from 'react-router-dom';
import navbar from '../CSS/navbar.css'

const Navbar = () =>{
    return(
        <div class='nav'>
            
            <Link to="/Home">Home</Link>
            <Link to="/Category">Catrgory</Link>
            <Link to="/Expenses">Expenses</Link>
            <Link to="/Reports">Reports</Link>
        
        </div>
    )
}

export default Navbar;