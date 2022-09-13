import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailTour } from '../../Redux/Reducers/ToursReducer';

const Detail = () => {

    const [showText, setShowText] = useState(false)
    const isDetail = useSelector(state => state?.tours?.Detailtours)

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailTour(id))
    }, [])


    return (
        <div className={styles.bgn_detail}>
            <div className={styles.container}>
                <div className={styles.general_boxick}>
                    <div className={styles.all_detail}>
                        <div key={isDetail.id} className={styles.card_detail}>
                            <img src={isDetail?.picture} alt="" />
                            <h1 className={styles.detail_name}>{isDetail?.name}</h1>
                            <h2 className={styles.detail_distance}>{isDetail?.distance_air}</h2>
                        </div>
                        <div className={styles.descr_detail}>
                            <p className='style_p'>{showText ? isDetail?.description : isDetail?.description?.substring(0, 350) + '...'}</p>
                            <button onClick={() => setShowText(!showText)}>{showText ? 'Скрыть' : 'Ещё'}</button>
                        </div>


                    </div>
                </div>
                <div className={styles.boxick_btn}>
                    <div className={styles.boxicking_btn}>
                        <Link to={'/transport'}><button className={styles.btn_detail}>Маршрут</button></Link>

                    </div>
                    <Link to={'/tourselection'}><button className={styles.btn_detail}>Назад</button></Link>

                </div>
            </div>
        </div>

    );
};

export default Detail;
