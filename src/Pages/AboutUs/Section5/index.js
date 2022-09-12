import React from 'react';
import styles from './Section5.module.css'
import image from '../../../Images/Backgrounds/asyl.jpeg'
import image1 from '../../../Images/Backgrounds/Chopa.jpeg'
import image2 from '../../../Images/Backgrounds/Ruslan.jpg'


const Section5 = () => {
    return (
        <div className={styles.container}>
            <h3>Наша команда</h3>
            <div className={styles.our_team}>
                <div className={styles.team}>
                    <div className={styles.ruslan}>
                        <img src={image2} alt="" />
                        <h1>Руслан</h1>
                        <p>Генеральный Директор</p>
                        <h2>Работаю для того чтобы РАБОТАТЬ</h2>
                    </div>
                    <div className={styles.chopa}>
                        <img src={image1} alt="" />
                        <h1>Чопа</h1>
                        <p>Генеральный "Сонный" Бухгалтер</p>
                        <h2>Живу чтобы СПАТЬ !!!</h2>
                    </div>
                    <div className={styles.asyl}>
                        <img src={image} alt="" />
                        <h1>Асылбек</h1>
                        <p>Водила</p>
                        <h2>Живу чтобы КУШАТЬ !!!</h2>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card2}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;