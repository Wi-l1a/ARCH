import React from 'react';
import styles from './Section4.module.css'
import batkenn from '../../../Images/batken.jpg'
import buranaa from '../../../Images/burana.jpg'
import archh from '../../../Images/arch.jpg'
import less from '../../../Images/les.jpg'
import oshh from '../../../Images/osh.jpg'
import saryy from '../../../Images/sary.png'
import tashh from '../../../Images/tash.jpg'
import floww from '../../../Images/flow.jpg'
import loshh from '../../../Images/losh.jpg'
import your from '../../../Images/you.jpg'


const Section4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.new_tour}>
                <h2>Фотогаллерея</h2>
                <p>В данной подборке показаны самые красивые фотки сделанные во время тура</p>
            </div>
            <div className={styles.img_all}>
                <img width={396} src={archh} alt="" />
                <img width={396} src={batkenn} alt="" />
                <img width={396} src={buranaa} alt="" />
            </div>
            <div className={styles.img_all}>
                <img width={396} src={less} alt="" />
                <img width={396} src={oshh} alt="" />
                <img width={396} src={saryy} alt="" />
            </div>
            <div className={styles.img_all}>
                <img width={396} src={tashh} alt="" />
                <img width={396} src={floww} alt="" />
                <img width={396} src={loshh} alt="" />
            </div>
            <div className={styles.your_img}>
                <img src={your} alt="" />
            </div>

        </div>
    );
};

export default Section4;