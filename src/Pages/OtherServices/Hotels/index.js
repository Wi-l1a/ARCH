import React, { useEffect } from 'react';
import styles from './Hotels.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getHotelArr } from '../../../Redux/Reducers/ToursReducer';
import CardSection1 from './Sections/Section1';
import Section2 from './Sections/Section2';




const Hotels = () => {


    return (
        <div className={styles.bg}>
            <Section2 />
            <CardSection1 />
        </div>
    );
};

export default Hotels;