import React from 'react';
import styles from './Home.module.css'
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3/index';
import Section4 from './Sections/Section4/index';
import Section5 from './Sections/Section5/index';
import Section6 from './Sections/Section6/index';
import Section7 from './Sections/Section7/index';
import Section8 from './Sections/Section8/index';
import Section9 from './Sections/Section9/index';
import Section10 from './Sections/Section10/index';
import Section11 from './Sections/Section11/Section11';

const Home = () => {
    return (
        <div className={styles.bg}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
        </div>
    );
};

export default Home;
