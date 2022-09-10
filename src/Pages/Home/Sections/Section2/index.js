import React from 'react';
import styles from './Section2.module.css'
import lineRight1 from './../../../../Images/line/line-right1.png'
import lineLeft1 from './../../../../Images/line/line-left1.png'
import { Link, NavLink } from 'react-router-dom';

const Section2 = () => {
    return (
        <section className={styles.bg_shadow}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.box_line_right}><img src={lineRight1} alt="" /></div>
                    <div className={styles.box_general}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/icon/number-1.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Нетронутая природа</h3>
                                <p className={styles.number_desc} >Основные причины - это нетронутые ущелья, кристально чистые
                                    высокогорные озера, стремительные горные реки, растительный и животный мир, богатый
                                    редкими видами… Откройте для себя девственную природу Кыргызстана. </p>
                            </div>
                        </div>
                        <div className={styles.wild_img}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/wild-nature.svg" alt="#" />
                        </div>
                    </div>
                    <div className={styles.box_line_right}><img src={lineLeft1} alt="" /></div>

                </div>
            </div>


        </section>
    );
};

export default Section2;