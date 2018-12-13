import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import 'whatwg-fetch';

const citiesIdList = {
    "moscow": 524901,
    "saint_petersburg": 498817,
    "london": 2643743,
    "new_york": 5128638,
    "shanghai": 1796236,
    "washington": 5815135
};
const API_KEY = '&APPID=dad4f150c54a21c6d1e40df6c6832096';
const API_CITY_URL = `http://api.openweathermap.org/data/2.5/group?id=${Object.values(citiesIdList).join(',')}&units=metric${API_KEY}`;

class WidgetContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: [],
            error: {}
        }
    }

    componentDidMount() {
        fetch(API_CITY_URL)
            .then((response) => response.json())
            .then((json) => {
                this.setState({cities: json.list})
            })
            .catch((error) => {
                this.setState({error: error});
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return this.state.cities.length
            ? <Widget cities={this.state.cities}/>
            : <h1 style={{color: '#F00000'}}>{this.state.error.toString()}</h1>
    }
}

export default WidgetContainer;