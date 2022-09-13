import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Detail from './../../Pages/Detail/index';
import Tours from './../../Pages/Tours/index';
import Contact from './../../Pages/Contact/index';
import Aboutus from './../../Pages/AboutUs/index';
import Otherservices from './../../Pages/OtherServices/index';
import Transport from './../../Pages/OtherServices/Transport/index';
import Hotels from './../../Pages/OtherServices/Hotels/index';
import Registration from './../../Pages/Registration/index';
import Login from './../../Pages/Login/index';
import Goodfood from '../../Pages/GoodFood';
import Mycabinet from './../../Pages/MyCabinet/index';
import TourSelection from './../../Pages/TourSelection/index';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/tours' element={<Tours />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/otherservices' element={<Otherservices />} />
                <Route path='/transport/' element={<Transport />} />
                <Route path='/hotels' element={<Hotels />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/goodfood' element={<Goodfood />} />
                <Route path='/mycabinet' element={<Mycabinet />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/tourselection' element={<TourSelection />} />
            </Routes>
        </main>
    );
};

export default Main;