import React from 'react';
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}><NavLink to={'/'}><img src='' alt='logo' /></NavLink></div>
                    <ul className={styles.menu_box}>
                        <li>
                            <NavLink to="/tours">Туры</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/otherservices">Другие услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Контакты</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registration">РЕГ</NavLink>/
                            <NavLink to="/login">ЛОГ</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;