import {Link, Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import style from './Layout.module.css'

const Layout =()=>{
    return (
        <div className={style.layoutWrapper}>

            <Header/>
            <main>
                <Nav/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );

}
export default Layout;