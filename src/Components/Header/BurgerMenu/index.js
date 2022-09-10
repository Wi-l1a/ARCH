import React from 'react';
import styles from './BurgerMenu.module.css'
import logo from './../../../Images/Backgrounds/logo.png'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



const BurgerMenu = () => {
    return (
        <div className={styles.NavBar_box}>
            <Navbar className={styles.NavBar} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt=""
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id={styles.responsive_navbar_nav}>
                    <Nav className={styles.mr_auto}>
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/tours'}>Туры</Link>
                        <Link to="/aboutus">О нас</Link>
                        <Link to="/otherservices">Другие услуги</Link>
                        <Link to="/contact">Контакты</Link>
                        <Link to="/registration">Регистрация</Link>
                        <Link to="/login">Вход</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default BurgerMenu;