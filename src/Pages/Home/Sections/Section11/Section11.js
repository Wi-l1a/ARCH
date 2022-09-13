import React from 'react';
import styles from './Section11.module.css'
import { Link } from 'react-router-dom';
const Section11 = () => {

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <section >
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.general_box}>
                        <div className={styles.box_title}>
                            <p>Кыргызстан это особое состояние души. Любовь с первого взгляда и на всю жизнь.

                                Первозданная природа и богатая культура Кыргызстана не оставит Вас

                                равнодушным и Вы захотите возвращаться сюда снова и снова</p>
                            <Link to='/tours'><button onClick={ScrollUp}>Посетить Кыргызстан!</button></Link>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section11;