import React from 'react';
import styles from './Section1.module.css'
import { Link } from 'react-router-dom';


const Section1 = () => {
    return (
        <div>
            <div className={styles.bgr_tour}>
                <div className={styles.container}>
                    <div className={styles.h1_tour}>
                        <h1 className={styles.h1_font}>Погрузись в красоту Центральной<br />Азии</h1>
                        <p>Открой для себя обогащающие природой и культурно тематические поездки под руководством профессионалов</p>
                    </div>
                    <div className={styles.tour_h2}>
                        <h2>Найти свой тур</h2>
                    </div>
                    <div className={styles.box_btn}>
                        <Link to={'/tourselection'}><button className={styles.btn_sel}>Подбор Тура</button></Link>
                        <Link to={'/hotels'}><button className={styles.btn_sel}>Выбрать Отель</button></Link>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Section1;