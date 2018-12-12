import React from 'react';
import WeatherIcon from 'react-icons-weather';

import styles from './List.scss';

const dayNameConverter = (name) => new Date(name).toLocaleString('en', {weekday: 'short'});

const Late = (props) => {
    return (
    <ul className={styles.days__list}>
        {props.days.map(day => (
            <li key={day.id} className={styles.days__item}>
                <div className={styles.day}>
                    <div className={styles.day__name}>{dayNameConverter(day.dt_txt)}</div>
                    <WeatherIcon name="owm" iconId={''+ day.weather[0].id} className={styles.day__weather}/>
                    <div className={styles.day__temp}>{(day.main.temp - 273.15).toFixed(1)}&deg;</div>
                </div>
            </li>
        ))}
    </ul>
    )
};

export default Late;
