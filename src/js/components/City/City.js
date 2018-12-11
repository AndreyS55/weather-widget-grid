import React, { Component } from 'react';
import WeatherIcon from 'react-icons-weather';
import List from '../List/List';

import styles from './City.scss';

class City extends Component {

    constructor (props) {
        super (props);
        this.state = {
            showDetails: false
        }
    }

    handleClick() {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        const { name, temp, code, days } = this.props;
        let weatherDetails;
        let itemClass = styles.city;
        let iconClass = styles.city__weather;
        let cityNameClass = styles.city__main;
        if (this.state.showDetails) {
            itemClass += styles.city__open;
            iconClass = styles.city__weather__open;
            cityNameClass = styles.city__main__hidden;
            weatherDetails = (
                <List days={days}/>
            );
        }
        console.log(styles.city);
        return (
            <React.Fragment>
                <div className={itemClass} onClick={this.handleClick.bind(this)}>
                    <WeatherIcon name="owm" iconId={''+ code} className={iconClass}/>
                    <div className={cityNameClass}>{name} / {temp}&deg;</div>
                </div>
                {weatherDetails}
            </React.Fragment>
        );
    }
}

export default City;