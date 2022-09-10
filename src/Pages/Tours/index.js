import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import styles from './Tours.module.css'
import Section3 from './Section3/index';
import Section4 from './Section4';
const Tours = () => {
    return (
        <div className={styles.bg}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />




        </div>

    );
};

export default Tours;