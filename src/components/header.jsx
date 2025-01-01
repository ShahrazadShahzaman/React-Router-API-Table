import { NavLink } from "react-router-dom";
import "./all.css"
const Header =()=>{
 const menuList = [
    {
        name:"Home",
        url:"/"
    },
    {
        name:"About",
        url:"/about"

    },
    {
        name:"Services",
        url:"/services"
    },
    {
        name:"Data",
        url:"/data"
    },
 ]
    return(
        <>
        <nav className="Navbar">
            <ul className="nav">{
                menuList.map((item,index)=>{
                    return(
                    <li className="nav" key={index}>
                        <NavLink to={item.url}>{item.name}</NavLink>
                    </li> 
                );
                })
            }
            </ul>
        </nav>
        </>
    );
};
export default Header;