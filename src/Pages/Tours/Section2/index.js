import React from 'react';
import styles from './Section2.module.css'
import bezo from '../../../Images/save.png'
import pol from '../../../Images/pol.png'
import Slide from './../Slide/index';






const Section2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section2_h1}>
                <h1>Ваш отдых - Наша Забота</h1>
                <p>Иногда самые интересные путешетсвия - это те, в которых вы можете просто отпустить ситуацию и наслаждаться впечатлениями, зная, что вы в надежных руках, Сервис и обслуживание - это неотъемлемая часть нашей работы в ARCH Travel, и благополучие наших путушественников стоит на первом месте.</p>
                <img src={bezo} alt="" />
                <img src={pol} alt="" />
            </div>
            <div className={styles.p_tour}>
                <p>Какой вид отдыха Вам нравится больше? Активный или культурный? В группе единомышленников или индивидуально? Ниже выберите тур, который вы ищете</p>
            </div>
            <Slide />

        </div>


    );
};

export default Section2;