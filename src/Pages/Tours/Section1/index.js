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
                    <div>
                        <select className={styles.select_op}>
                            <option>Выберите сложность</option>
                            <option>0.5 звезд</option>
                            <option>1 звезд</option>
                            <option>1.5 звезд</option>
                            <option>2 звезд</option>
                            <option>2.5 звезд</option>
                            <option>3 звезд</option>
                            <option>3.5 звезд</option>
                            <option>4 звезд</option>
                            <option>4.5 звезд</option>
                            <option>5 звезд</option>
                        </select>
                        <select className={styles.select_op}>
                            <option>Выберите вид тура</option>
                            <option>Пеший</option>
                            <option>Джип тур</option>
                            <option>Культурный</option>

                        </select>

                        <Link to={'/tourselection'}><button className={styles.btn_sel}>Отправить</button></Link>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Section1;