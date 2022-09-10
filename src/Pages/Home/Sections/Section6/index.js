import React from 'react';
import styles from './Section6.module.css'
import muzyka from './../../../../Images/card/muzyka-img.jpg'
import food from './../../../../Images/card/food-img.jpg'
import murukodeliezyka from './../../../../Images/card/rukodelie-img.jpg'
const Section6 = () => {
    return (
        <section className={styles.bg_shadow}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.box_general}>
                        <div className={styles.card}>
                            <img className={styles.card_img} src={muzyka} alt="" />
                            <div className={styles.card_info}>
                                <p className={styles.text_title}>Традиции и обычаи</p>
                                <p className={styles.text_body}>Lorem Ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.card_img} src={food} alt="" />
                            <div className={styles.card_info}>
                                <p className={styles.text_title}>Национальная еда</p>
                                <p className={styles.text_body}>Lorem Ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.card_img} src={murukodeliezyka} alt="" />
                            <div className={styles.card_info}>
                                <p className={styles.text_title}>Прикладное исскуство</p>
                                <p className={styles.text_body}>Lorem Ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;