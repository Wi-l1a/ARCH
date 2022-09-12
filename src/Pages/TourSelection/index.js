import React from 'react';
import styles from './TourSelection.module.css'
import TourSection1 from './TourSection1/index';
import TourSection2 from './TourSection2';



const TourSelection = () => {
    return (
        <div>
            <TourSection1 />
            <TourSection2 />
        </div>

    );
};

export default TourSelection;