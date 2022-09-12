import React from 'react';
import styles from './Section6.module.css'
import image from './../../../Images/Backgrounds/ITC.png'
import image1 from './../../../Images/Backgrounds/kavkev.png'
import image2 from './../../../Images/Backgrounds/js.png'


const Section6 = () => {
    return (
        <div className={styles.container}>
            <h1>Наши партнеры</h1>
            <div className={styles.images}>
                <div className={styles.image_1}>
                    <img className={styles.image} src={image} alt="" />
                </div>
                <div className={styles.image_1}>
                    <img className={styles.image} src={image1} alt="" />

                </div>
                <div className={styles.image_1}>
                    <img className={styles.image} src={image2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Section6;