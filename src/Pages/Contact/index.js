import React, { useEffect } from 'react';
import styles from './Contact.module.css'
import image from '../../Images/Backgrounds/petro.jpg'
import Sectionone from './Sectionone';
import { getAllContacts } from './../../Redux/Reducers/ToursReducer';
import { useDispatch, useSelector } from 'react-redux';


const Contact = () => {
    const dispatch = useDispatch()
    const contactsArr = useSelector(state => state.tours.contactsArr)
    const isLoading = useSelector(state => state.tours.isLoading)

    useEffect(() => {
        dispatch(getAllContacts())
    }, [])

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h1>Задайте свой вопрос</h1>
                <div className={styles.contacts}>
                    <div className={styles.block1}>
                        <h2>Оставьте свой вопрос и мы свяжемся с Вами в ближайшее время</h2>
                        <img width={300} src={image} alt="" />
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.input}>
                            <input placeholder='Имя' type="text" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Телефон' type="phone" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Почта' type="email" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder='Ваш запрос' type="text" />
                        </div>
                        <div className={styles.btn}>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.container_contact}>

                        {
                            contactsArr.map(el => (
                                <div className={styles.card} key={el.id}>
                                    <div className={styles.contacts_1}>
                                        <div className={styles.name}>
                                            <h2>{el.name}</h2>
                                            <h3>{el.mobile}</h3>
                                            <h3>{el.email}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <Sectionone />
        </div>
    );
};

export default Contact;