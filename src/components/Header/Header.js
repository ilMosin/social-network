import {Link, NavLink} from "react-router-dom";
import {style} from './Header.module.css'

const Header =()=> {
    return (

        <header className="App-header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/post">Blog</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
        </header>
    )
}

export default Header;