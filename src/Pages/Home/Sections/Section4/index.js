import React from 'react';
import styles from './Section4.module.css'

import lineup1 from './../../../../Images/line/line-up1.png'
import lineup2 from './../../../../Images/line/line-up2.png'


const Section4 = () => {
    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.history_wrapper}>
                    <div className={styles.history_items}>
                        <div className={styles.history_item}>
                            <h3>Упоминание</h3>
                            <p>Первые государственные образования на территории
                                современного
                                Кыргызстана возникли во втором веке до н.э., когда южные, земледельческие районы страны
                                вошли в состав государства Паркан.</p>
                        </div>
                        <div className={styles.history_item} >
                            <h3>Могущество</h3>
                            <p>В 4-3 вв. до нашей эры древние кыргызы входили в мощные
                                племенные
                                союзы кочевников, которые весьма серьезно тревожили Китай и все соседние племена.</p>
                        </div>
                    </div>
                    <div className={styles.history_items} id={styles.history_img_positions}>
                        <img className={styles.line_up} src={lineup1} alt="line" />
                        <img className={styles.history_img} src="https://ulushtravel.com/ngn/img/main-page-images/han.svg" alt="#" />
                        <img className={styles.line_up2} src={lineup2} alt="line" />

                    </div>
                    <div className={styles.history_items}>
                        <div className={styles.history_item}>
                            <div className={styles.box_number1}>
                                <img src="https://ulushtravel.com/ngn/img/main-page-images/numbre-2.svg" alt="#" />
                                <div className={styles.wild_subitem}>
                                    <h2 className={styles.number_title}>История</h2>
                                    <p className={styles.number_desc} >История Кыргызстана - это история кочевого народа,
                                        история его
                                        взлетов, падений, достижений и
                                        зарождения самой кыргызской народности.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.history_item}>
                            <h3>Независимость</h3>
                            <p>31 августа 1991 года Республика Кыргызстан
                                провозгласила
                                независимость от Советского Союза.</p>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Section4;