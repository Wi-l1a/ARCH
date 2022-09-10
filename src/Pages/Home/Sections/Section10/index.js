import React from 'react';
import styles from './Section10.module.css'
import line1 from './../../../../Images/line/line-up4.png'
import line2 from './../../../../Images/line/line-up5.png'

const Section10 = () => {
    return (
        <section >
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.general_box}>
                        <img className={styles.line1} src={line1} alt="line" />
                        <img className={styles.line2} src={line2} alt="line" />

                        <div className={styles.box_number3}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-7.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h2 className={styles.number_title}>Цена</h2>
                                <p className={styles.number_desc} >
                                    Отправляясь на отдых в Кыргызстан, каждый турист рассчитывает на
                                    определенный бюджет. Несмотря на то, что страна предлагает курортный отдых высокого
                                    уровня, здесь можно хорошо провести время и найти развлечения как обеспеченному, так и
                                    бюджетному туристу.
                                </p>
                            </div>
                        </div>
                        <div className={styles.box_img}><img src="https://ulushtravel.com/ngn/img/main-page-images/Bozui.svg" alt="#" /></div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section10;