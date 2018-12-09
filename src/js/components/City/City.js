import React from 'react';
import Snow from '../../../img/Snow.svg';

import styles from './City.scss';

const City = (props) => (
    <a href="#" className={styles.city}>
        <img src={Snow} alt="" className={styles.city__weather}/>
        <div className={styles.city__main}>{props.name} / {props.temp}&deg;</div>
    </a>
);

export default City;