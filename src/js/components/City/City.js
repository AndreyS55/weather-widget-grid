import React from 'react';
import WeatherIcon from 'react-icons-weather';

import styles from './City.scss';

const City = (props) => (
    <a href="#" className={styles.city}>
        {console.log(new Date(props.days.dt_txt).toLocaleString('en', {weekday: 'short'}))}
        {console.log(props.daytemp.toFixed(2), props.d)}
        <WeatherIcon name="owm" iconId={''+ props.code} className={styles.city__weather}/>
        <div className={styles.city__main}>{props.name} / {props.temp}&deg;</div>
    </a>
);

export default City;