import React from 'react';
import { Link } from 'react-router-dom';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import styles from './Section2.module.css'
import Section6 from './../Section6/index';

const Section2 = () => {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.box_menu} >
                        <Link to={'/'}>Новости компании</Link>
                        <Link to={'/'}>Наша миссия и ценности</Link>
                        <Link to={'/'}>Политика устойчивого развития</Link>
                        <Link to={'/'}>Команда</Link>
                        <Link to={'/'}>Наши партнеры</Link>
                    </div>
                </div>
                <div className={styles.nav_text}>
                    <div className={styles.text1}>
                        <h1>Открытие юрточного городка на побережье Сон-Кол</h1>
                    </div>
                    <div className={styles.text2}>
                        <h2 >
                            Туристическая компания «ARCH-TRAVEL» получила эмблему от WTTC «Save Travels», этот знак
                            декларирует о том, что наша компания работает с соблюдением протоколов и рекомендаций
                            здравоохранения и организации безопасных путешествий, соответствующие Глобальным
                            протоколам безопасных путешествий WTTC.
                        </h2>
                    </div>
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                </div>


            </div>
        </>

    );
};

export default Section2;