import React from 'react'
import logo from '../images/logo.png';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import '../style/Sidebar.css';





const Sidebar = () => {
  return (
    <div className="sidenav">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>


        <ul className="navbar">
            {Routes.map((data,index)=> {
                return(
                    <li className="nav-item" key={index}>
                        <Link to={data.route} className="nav-link"> {data.name}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar