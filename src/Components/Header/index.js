import React from 'react';
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import logo from './../../Images/Backgrounds/logo.png'
import BurgerMenu from './BurgerMenu/index';
const Header = () => {
    return (
        <header>
            <BurgerMenu />
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <Link to={'/'}><img src={logo} alt='logo' /></Link>
                    </div>
                    <ul className={styles.menu_box}>
                        <li>
                            <Link to="/tours">Туры</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">О нас</Link>
                        </li>
                        <li>
                            <Link to="/otherservices">Другие услуги</Link>
                        </li>
                        <li>
                            <Link to="/contact">Контакты</Link>
                        </li>
                        <li>
                            <Link to="/registration">Регистрация</Link>
                            <Link to="/login">Вход</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;