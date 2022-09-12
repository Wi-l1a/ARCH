import React from 'react';
import styles from './Section5.module.css'
const Section5 = () => {
    return (
        <section >
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.general_box}>
                        <div className={styles.box_number3}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-3.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h2 className={styles.number_title}>Богатое культурное
                                    наследие</h2>
                                <p className={styles.number_desc} >
                                    Посетив солнечный Кыргызстан, вы многое узнаете об устном народном творчестве кыргызов, во
                                    главе которого стоит эпос «Манас», о произведениях Чингыз Айтматова, о зрелищных и
                                    занимательных национальных играх и об искусном рукоделии кыргызских мужчин и женщин.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section5;