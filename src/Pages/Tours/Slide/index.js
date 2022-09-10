import React from 'react';
import styles from './Slide.module.css'
import djip from '../../../Images/djip.jpg'
import kult from '../../../Images/kult.jpg'
import pesh from '../../../Images/pesh.jpg'
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    return (
        <div className={styles.all_slide}>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={djip} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Jeep tour</h3>
                        <button>Подробнее</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={kult} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Cultural tour</h3>
                        <button>Подробнее</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={pesh} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Walking tour</h3>
                        <button>Подробнее</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>


    );
};

export default Slide;