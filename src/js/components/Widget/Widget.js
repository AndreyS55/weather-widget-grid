import React, { Component } from 'react';
import City from '../City/City';

import styles from './Widget.scss';

class Widget extends Component {
    constructor (props) {
        super (props);
        this.state = {
            cities: {},
        }
    }

    render() {
        const { cities, days} = this.props;
        let daysList = [days.list[0],days.list[8],days.list[16],days.list[24],days.list[32]];
        return (
            <div className={styles.widget}>
                <ul className={styles.widget__list}>
                    {cities.list.map(city => (
                        <li key={city.id} className={styles.widget__item}>
                            <City name={city.name}
                                  temp={city.main.temp}
                                  code={city.weather[0].id}
                                  days={daysList}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Widget;