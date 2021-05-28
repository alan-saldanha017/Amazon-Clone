import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
    const [{basket,user}, dispatch] = useStateValue();
    const handleAuthentication =() => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
            <img className="header__logo" src="https://www.jing.fm/clipimg/full/81-815835_amazon-logo-png-amazon-logo-white.png" alt="amazon-logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
        <div className="header__nav">
          
                <Link to={!user && '/login'}>
                <div className="header__option" onClick={handleAuthentication}>
    <span className="header__optionLineOne">Hello {user?.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
            <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
        <ShoppingCartIcon/>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
        </div>

    )
}

export default Header
