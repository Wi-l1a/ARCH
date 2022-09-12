import React from 'react';
import styles from './Contact.module.css'
import image from '../../Images/Backgrounds/petro.jpg'
import Sectionone from './Sectionone';


const Contact = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h1>Задайте свой вопрос</h1>
                <div className={styles.contacts}>
                    <div className={styles.block1}>
                        <h2>Оставьте свой вопрос и мы свяжемся с Вами в ближайшее время</h2>
                        <img width={300} src={image} alt="" />
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.input}>
                            <input placeholder='Имя' type="text" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Телефон' type="phone" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Почта' type="email" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Ваш запрос' type="text" />
                        </div>
                        <div className={styles.btn}>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
            <Sectionone />
        </div>
    );
};

export default Contact;