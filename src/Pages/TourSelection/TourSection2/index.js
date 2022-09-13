import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TourSection2.module.css'
import { getAllTour } from '../../../Redux/Reducers/ToursReducer';
import { Link } from 'react-router-dom';

const TourSection2 = () => {
    const dispatch = useDispatch()

    const toursArr = useSelector(state => state.tours.toursArr)
    const isLoading = useSelector(state => state.tours.isLoading)
    useEffect(() => {
        dispatch(getAllTour())
    }, [])

    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div className={styles.bg_section2}>

            {
                toursArr ?
                    <div className={styles.container}>
                        <div className={styles.box_card}>
                            {
                                toursArr.map(el => (
                                    <div key={el?.id} className={styles.card}>
                                        <img src={el?.picture} alt="" />
                                        <h1 className={styles.location_name}>{el?.name}</h1>
                                        <h2 className={styles.location_distance}>{el?.distance_air}</h2>
                                        <Link to={'/detail/' + el?.id}><button className={styles.location_btn}>Подробнее</button></Link>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <h1>Not Found</h1>
                    </div>
            }
        </div >
    );
};



export default TourSection2;