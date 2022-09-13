import React, { useEffect } from 'react';
import styles from './Header.module.css'
import { Link, useNavigate } from "react-router-dom";
import logo from './../../Images/Backgrounds/logo.png'
import BurgerMenu from './BurgerMenu/index';
import { getLSToken, getLSUser, removeLSToken } from './../../localStorage/index';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../Redux/Reducers/UsersReducers';

import LoginIcon from '@mui/icons-material/Login';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { removeUserName } from './../../Redux/Reducers/UsersReducers';


const Header = () => {

    const lsToken = getLSToken()
    const lsName = getLSUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        removeLSToken()
        dispatch(removeToken())
        dispatch(removeUserName())
    }

    // useEffect(() => {
    //     if (!lsToken) {
    //         navigate('/')
    //     }
    // }, [lsToken])


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
                        {
                            lsToken && lsName
                                ?
                                <>
                                    <li>
                                        <Link to='/'>{lsName}</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.btn} onClick={logOut} to='/login' ><AccessibleForwardIcon /> Выход</Link>

                                    </li>
                                </>
                                :
                                <li>
                                    <Link to="/registration">Регистрация</Link>
                                    <Link to="/login">Вход</Link>
                                </li>
                        }
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;