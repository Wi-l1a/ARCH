import React from 'react';
import styles from './Section1.module.css'
const Section1 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.box_general}>
                        <div><h1 className={styles.header_title}>7 причин посетить Кыргызстан</h1></div>
                        <div className={styles.header_desc}>
                            <p>
                                Горы и природа Кыргызстана привлекают туристов со всего света. <br />
                                Пожалуй, это одна из самых веских причин посетить нашу страну
                            </p>
                        </div>
                        <div className={styles.wrapper__img}>
                            <div className={styles.img_round}>
                                <img className={styles.img_item} src="https://ulushtravel.com/ngn/img/main-page-images/kanion.jpg" alt="#" />
                            </div>
                            <div className={styles.img_round}>
                                <img className={styles.img_item} src="https://ulushtravel.com/ngn/img/main-page-images/chatyr-kol.jpg" alt="#" />
                            </div>
                            <div className={styles.img_round}>
                                <img className={styles.img_item} id={styles.img_item_medium} src="https://ulushtravel.com/ngn/img/main-page-images/burana.jpg" alt="#" />
                            </div>
                            <div className={styles.img_round}>
                                <img className={styles.img_item} src="https://ulushtravel.com/ngn/img/main-page-images/suusamyr.jpg" alt="#" />
                            </div>
                            <div className={styles.img_round}>
                                <img className={styles.img_item} src="https://ulushtravel.com/ngn/img/main-page-images/yssysk-kol.jpg" alt="#" />
                            </div>

                        </div>
                        <div className={styles.header_subtitle}>
                            <h2>Мы предлагаем Вам познакомиться с Кыргызстаном, ведь он <br />
                                намного уникальнее, чем можно предположить</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section1;