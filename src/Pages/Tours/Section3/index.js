import React from 'react';
import styles from './Section3.module.css'
import gi from '../../../Images/gi.gif'
import kg from '../../../Images/kg.gif'
import gora from '../../../Images/gora.png'



const Section3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.new_tour}>
                <h2>Новые Туры</h2>
                <p>Короткий текст общего характера, рассказывающий о видах туров, существующих у нас</p>
            </div>
            <div className={styles.all_tour}>

                <div className={styles.hourse}>
                    <img src={gi} alt="" />
                    <h2>Конный тур по Кыргызстану</h2>
                </div>
                <div className={styles.hourse}>
                    <img src={kg} alt="" />
                    <h2>Неизведанный Кыргызстан</h2>
                </div>
                <div className={styles.hourse}>
                    <img src={gora} alt="" />
                    <h2>По пятам Тянь-Шаня</h2>
                </div>

            </div>



        </div >
    );
};

export default Section3;