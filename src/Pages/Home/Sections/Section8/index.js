import React from 'react';
import styles from './Section8.module.css'
import line1 from './../../../../Images/line/line-right2.png'
import line2 from './../../../../Images/line/line-left2.png'
import line3 from './../../../../Images/line/line-up3.png'

const Section8 = () => {
    return (
        <section className={styles.bg_shadow}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.box_sports}>
                        <img className={styles.line1} src={line1} alt="line" />
                        <img className={styles.line2} src={line2} alt="line" />
                        <img className={styles.line3} src={line3} alt="line" />
                        <div className={styles.sport_items}>
                            <div className={styles.box_item_sport}>
                                <img src="https://ulushtravel.com/ngn/img/main-page-images/number-5.svg" alt="#" />
                                <div className={styles.wild_subitem}>
                                    <h3 className={styles.number_title}>Экстремальные виды
                                        спорта </h3>
                                    <p className={styles.number_desc} >
                                        Туры в Кыргызстан идеальны для тех, кто любит активный отдых в горах. С недавнего
                                        времени здешние горные реки стали популярным местом среди увлекающихся рафтингом; также
                                        огромным многообразием славятся маршруты для походов и скалолазания. Зимой в Кыргызстане
                                        катаются на лыжах и сноуборде, а летом – на горных велосипедах.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.wild_item}>
                                <img src="https://ulushtravel.com/ngn/img/main-page-images/extrim1.svg" alt='#' />

                            </div>
                            <div></div>
                        </div>
                        <div className={styles.sport_items} id={styles.sport_items_none}>
                            <div className={styles.wild_card_title}>
                                <h2>Джип-туры</h2>
                                <p>Нетронутая человеком природа страны это первое, что привлекает
                                    туристов,
                                    но это же и делает путешествие по Кыргызстану таким сложным и захватывающим. </p>
                            </div>
                            <div className={styles.wild_card_title}>
                                <h2>Альпинизм </h2>
                                <p>Нетронутая человеком природа страны это первое, что привлекает
                                    туристов,
                                    но это же и делает путешествие по Кыргызстану таким сложным и захватывающим. </p>
                            </div>
                            <div className={styles.wild_card_title}>
                                <h2>Лыжный спорт</h2>
                                <p>Нетронутая человеком природа страны это первое, что привлекает
                                    туристов,
                                    но это же и делает путешествие по Кыргызстану таким сложным и захватывающим. </p>
                            </div>
                            <div className={styles.wild_card_title}>
                                <h2>Рафтинг </h2>
                                <p>Нетронутая человеком природа страны это первое, что привлекает
                                    туристов,
                                    но это же и делает путешествие по Кыргызстану таким сложным и захватывающим. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;