import React from 'react';
import styles from './Section9.module.css'
const Section9 = () => {
    return (
        <section >
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.general_box}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-6.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Безвизовый режим</h3>
                                <p className={styles.number_desc} >
                                    В Кыргызстане действует безвизовый режим для граждан более чем 110 стран. В целях развития
                                    туризма и привлечения инвестиций в 2012 году Кыргызстан объявил безвизовый режим сроком на
                                    60 дней многим странам мира. Таким образом, Кыргызстан широко распахнул свои двери и сердце
                                    для гостей из десятков государств мира.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section9;