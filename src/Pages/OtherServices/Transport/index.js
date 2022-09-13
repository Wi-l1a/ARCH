import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Transport.module.css'
import { getDetailTransport } from './../../../Redux/Reducers/ToursReducer';
import marsh from './../../../Images/marf.jpg'
import tax from './../../../Images/tax.jpg'
import bas from './../../../Images/auto.jpg'
import { Link } from 'react-router-dom';


const Transport = () => {


    const dispatch = useDispatch()


    const isTransportById = useSelector(state => state.tours.toursArr)


    useEffect(() => {
        dispatch(getDetailTransport())
    }, [])


    return (
        <div className={styles.bg_transport}>
            {
                isTransportById ?
                    <div className={styles.container}>
                        <div className={styles.box_transport}>
                            {
                                isTransportById.map(el => (
                                    <div key={el?.id} className={styles.card_transport}>
                                        <h1 className={styles.transport_name}>{el?.name}</h1>
                                        <h2 className={styles.transport_price}>{'Цена: ' + el?.price}</h2>
                                        <h2 className={styles.transport_place}>{'Места: ' + el?.quantity_place}</h2>
                                    </div>
                                ))

                            }
                        </div>
                        <Link to={'/detail/' + isTransportById?.id}><button className={styles.location_btn}>Назад</button></Link>

                    </div>
                    :
                    <div>
                        <h1>Not Found</h1>
                    </div>
            }
        </div >
    );
};

export default Transport;