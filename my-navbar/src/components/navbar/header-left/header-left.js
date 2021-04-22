import {React, useState} from 'react'
import BurgerMenu from './burger-menu/burger-menu';
import './header-left.css'
import brandLogo from './icons8-showtime-64.png';

function HeaderLeft() {

    const [open, setOpen] = useState(false);

    const clickBurger = () => setOpen(!open);
    return (
        <div className="header-left">
            <BurgerMenu open={open} click={clickBurger}/>
            <div className="logo">
            <img src={brandLogo} alt="tv"></img>
            </div>
            <h1>ShowTime</h1>
        </div>
    )
}

export default HeaderLeft;
