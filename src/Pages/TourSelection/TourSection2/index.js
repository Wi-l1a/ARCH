import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TourSection2.module.css'
import { getAllTour } from '../../../Redux/Reducers/ToursReducer';

const TourSection2 = () => {
    const dispatch = useDispatch()

    // const toursArr = useSelector(state => console.log(state))
    const isLoading = useSelector(state => state.tours.isLoading)

    useEffect(() => {
        dispatch(getAllTour())
    }, [])

    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div className={styles.bg_section2}>
            :
            <h1>Not Found</h1>
        </div>
    );
};

export default TourSection2;