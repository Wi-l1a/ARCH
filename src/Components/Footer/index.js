import React from 'react';
import styles from './Footer.module.css'
import insta from '../../Images/insta.png'
import tele from '../../Images/tele.png'

const Footer = () => {
    return (
        <footer className={styles.all_footer}>
            <div className={styles.container}>
                <div className={styles.h2_footer}>
                    <h2>Выбрать тур- <br></br>поездку</h2>
                    <p>Культурный Пеший</p>
                    <p>Джип тур</p>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Запланировать <br></br> поездку</h2>
                    <p>Найти тур</p>
                    <p>Почему мы</p>
                    <p>Наши эксперты</p>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Компания</h2>
                    <p>Юрточный лагерь</p>
                    <p>Фотогалерея</p>
                    <p>Связаться с нами</p>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Подписывайтесь</h2>
                    <div className={styles.insta}>
                        <a href='https://instagram.com/kubatbekov__0805?igshid=YmMyMTA2M2Y='><img width={40} src={insta} alt="" /></a>
                        <p>Инстаграмм</p>
                    </div>
                    <div className={styles.teleg}>
                        <a href='https://t.me/+ngTXGj8daatjNTEy'><img width={35} src={tele} alt="" /></a>
                        <p>Телеграмм</p>
                    </div>
                </div>
            </div>



        </footer>
    );
};

export default Footer;