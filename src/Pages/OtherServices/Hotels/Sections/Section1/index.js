import React, { useEffect } from 'react';
import styles from './SectionCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getHotelArr } from '../../../../../Redux/Reducers/ToursReducer';
const CardSection1 = () => {

    const dispatch = useDispatch()

    const isHotel = useSelector(state => state.tours.hotelArr)

    console.log(isHotel);
    useEffect(() => {
        dispatch(getHotelArr())
    }, [])

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.box_card}>
                    {
                        isHotel.map(el => (
                            <div className={styles.card} key={el?.id}>
                                <img src={el.pic_cart} alt="card" />
                                <h2 className={styles.title} >{el.name}</h2>
                                <h2 className={styles.title}>{el.adress}</h2>
                                <h2 className={styles.title}>{el.price}</h2>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default CardSection1;