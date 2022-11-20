import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav =()=> {
    return (
        <nav className={style.nav}>
            <ul className={style.wrapper}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/groups'>Groups</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
            </ul>
        </nav>
    );
}

export default Nav;