import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';





const Slider = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <div className={styles.bg_box} id={styles.bg1}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-4.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Климат</h3>
                                <p className={styles.number_desc} >
                                    Рельеф и расположение страны стали причиной тому, что каждый может ощутить все
                                    существующие
                                    виды климата, это и почти морской, и резко континентальный, и субтропический, и
                                    умеренный.
                                    Особенностью Кыргызстана является и то, как ярко выражена здесь смена времен года,
                                    что
                                    неудивительно, ведь ближайшие к ней земли богаты пустынями.
                                </p>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.bg_box} id={styles.bg2}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-4.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Климат</h3>
                                <p className={styles.number_desc} >
                                    Рельеф и расположение страны стали причиной тому, что каждый может ощутить все
                                    существующие
                                    виды климата, это и почти морской, и резко континентальный, и субтропический, и
                                    умеренный.
                                    Особенностью Кыргызстана является и то, как ярко выражена здесь смена времен года,
                                    что
                                    неудивительно, ведь ближайшие к ней земли богаты пустынями.
                                </p>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.bg_box} id={styles.bg3}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-4.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Климат</h3>
                                <p className={styles.number_desc} >
                                    Рельеф и расположение страны стали причиной тому, что каждый может ощутить все
                                    существующие
                                    виды климата, это и почти морской, и резко континентальный, и субтропический, и
                                    умеренный.
                                    Особенностью Кыргызстана является и то, как ярко выражена здесь смена времен года,
                                    что
                                    неудивительно, ведь ближайшие к ней земли богаты пустынями.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.bg_box} id={styles.bg4}>
                        <div className={styles.box_number1}>
                            <img src="https://ulushtravel.com/ngn/img/main-page-images/number-4.svg" alt="#" />
                            <div className={styles.wild_subitem}>
                                <h3 className={styles.number_title}>Климат</h3>
                                <p className={styles.number_desc} >
                                    Рельеф и расположение страны стали причиной тому, что каждый может ощутить все
                                    существующие
                                    виды климата, это и почти морской, и резко континентальный, и субтропический, и
                                    умеренный.
                                    Особенностью Кыргызстана является и то, как ярко выражена здесь смена времен года,
                                    что
                                    неудивительно, ведь ближайшие к ней земли богаты пустынями.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;