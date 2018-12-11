import React, { Component } from 'react';
import City from '../City/City';

import styles from './Widget.scss';

// const API_KEY = 'dad4f150c54a21c6d1e40df6c6832096';
// const API_URL = `http://api.openweathermap.org/data/2.5/group?id=524901,498817,2643743,5128638,1796236,5815135&units=metric&APPID=${API_KEY}`;
// const API_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

class Widget extends Component {
    constructor (props) {
        super (props);
        this.state = {
            cities: []
        }
    }

    // componentDidMount(){
    //     fetch(API_URL)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // this.setState({cities: json.list})
    //             const data = JSON.stringify(json);
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

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