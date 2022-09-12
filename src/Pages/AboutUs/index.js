import { style } from '@mui/system';
import React from 'react';
import styles from './AboutUs.module.css'
import image from './../../Images/Backgrounds/fotoTeam.jpg'
import Section2 from './Section2/index';
import Section3 from './Section3/index';


const Aboutus = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.aboutUs}>
                    <div className={styles.image_team}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.text_about}>
                        <h1>Общая информация о Команде</h1>
                        <div>
                            <h2>Туристическая компания ОсОО «ARCH-TRAVEL» ведет туроператорскую деятельность с февраля 2020 года,
                                а по работе с иностранными Туристами с 2018 года. За 4 года работы в сфере туризма, фирма
                                зарекомендовала себя как надежный поставщик туристических и транспортных услуг в Кыргызстане. </h2>
                        </div>
                        <div>
                            <h2>Нашими услугами пользуются крупные предприятия, дипломатические представительства,
                                неправительственные и международные организации,а крупные корпорации и известные бизнесмены.С 2021
                                года компания является активным членом Кыргызской Ассоциации Туроператоров (КАТО).</h2>
                        </div>
                        <div>
                            <h2>
                                «ARCH-TRAVEL» придерживается политики устойчивого развития туризма, поэтому большое внимание
                                уделяет проведению тренингов по повышению квалификации для своего персонала, а также экологических
                                акций по очистке природных зон и парков от бытового мусора.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
            <Section2 />


        </div>
    );
};

export default Aboutus
    ;