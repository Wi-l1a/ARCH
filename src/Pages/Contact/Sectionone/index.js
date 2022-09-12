import React from 'react';
import styles from './Sectionone.module.css'
import image from './../../../Images/Backgrounds/insta.jpg'
import image1 from './../../../Images/Backgrounds/telegram.png'


const Sectionone = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.block_1}>
                    <div>
                        <h1>Социальные сети</h1>
                        <p>подписывайтесь на нас</p>
                        <div className={styles.block_text}>
                            <img width={50} src={image} alt="" />
                            <p>«ARCH-TRAVEL»</p>
                        </div>
                        <div>
                            <div className={styles.block_text}>
                                <img width={50} src={image1} alt="" />
                                <p>«ARCH-TRAVEL»</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.block_2}>
                    <div>
                        <h1>Потча</h1>
                    </div>
                    <div>
                        <p>info@«ARCH-TRAVEL».com</p>
                    </div>
                </div>
                <div className={styles.block_3}>
                    <div>
                        <h1>Телефон</h1>
                    </div>
                    <div>
                        <p>+996 (701) 099-993</p>
                    </div>
                </div>
                <div className={styles.block_4}>
                    <div>
                        <h1>Адрес</h1>
                    </div>
                    <div>
                        <p>г.Бишкек, ул. Байтик Баатыра 81</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionone;