import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Search, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <>
            <div className="navbar">
                <Link to='/'><img src={assets.Logo} className="Logo" /></Link>
                <ul className="navbar-menu">
                    <Link onClick={() => { setMenu("Home") }} className={menu === "Home" ? "active" : ""}>Home</Link>
                    <a href='#ExploreMenu' onClick={() => { setMenu("Menu") }} className={menu === "Menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => { setMenu("Mobile-App") }} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                    <a href='#footer' onClick={() => { setMenu("Contact Us") }} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">

                    <div className="navbar-search-icon">
                        <Search />
                    </div>
                    <div className="navbar-basket-icon">
                        <Link to='/cart'><ShoppingBasket /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>

                    <button onClick={()=>setShowLogin(true)}>sign in</button>
                </div>
            </div>
        </>
    )
}

export default navbar