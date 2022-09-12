import React from 'react';
import styles from './Footer.module.css'
import insta from '../../Images/insta.png'
import tele from '../../Images/tele.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.all_footer}>
            <div className={styles.container}>
                <div className={styles.h2_footer}>
                    <h2>Выбрать тур- <br></br>поездку</h2>
                    <Link to='/tourselection'>Культурный Пеший</Link>
                    <Link to='/tourselection'>Джип тур</Link>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Запланировать <br></br> поездку</h2>
                    <Link to='/tourselection'>Найти тур</Link>
                    <Link to='/tourselection'>Почему мы</Link>
                    <Link to='/'>Наши эксперты</Link>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Компания</h2>
                    <Link to='/tourselection'>Юрточный лагерь</Link>
                    <Link to='/tourselection'>Фотогалерея</Link>
                    <Link to='/tourselection'>Связаться с нами</Link>
                </div>
                <div className={styles.h2_footer}>
                    <h2>Подписывайтесь</h2>
                    <div className={styles.insta}>
                        <a href='https://instagram.com/kubatbekov__0805?igshid=YmMyMTA2M2Y='><img width={40} src={insta} alt="" /></a>
                        <a href='https://instagram.com/kubatbekov__0805?igshid=YmMyMTA2M2Y='>Инстаграм</a>

                    </div>
                    <div className={styles.teleg}>
                        <a href='https://t.me/+ngTXGj8daatjNTEy'><img width={35} src={tele} alt="" /></a>
                        <a href='https://t.me/+ngTXGj8daatjNTEy'>Телеграмм</a>
                    </div>
                </div>
            </div>



        </footer >
    );
};

export default Footer;