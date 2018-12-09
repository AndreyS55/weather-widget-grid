import React from 'react';
import Widget from '../Widget/Widget';

let citiesList = {
    cnt: 6,
    list: [{
        coord: {"lon": 37.62, "lat": 55.75},
        sys: {"type": 1, "id": 9029, "message": 0.0052, "country": "RU", "sunrise": 1544334436, "sunset": 1544360209},
        weather: [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}, {
            id: 701,
            main: "Mist",
            description: "mist",
            icon: "50n"
        }],
        "main": {"temp": -2.6, "pressure": 1005, "humidity": 92, "temp_min": -3, "temp_max": -2},
        "visibility": 4000,
        "wind": {"speed": 3, "deg": 140},
        "clouds": {"all": 90},
        "dt": 1544383660,
        "id": 524901,
        "name": "Moscow"
    }, {
        "coord": {"lon": 30.26, "lat": 59.89},
        "sys": {"type": 1, "id": 8926, "message": 0.002, "country": "RU", "sunrise": 1544338090, "sunset": 1544360087},
        "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n"}],
        "main": {"temp": -1, "pressure": 998, "humidity": 86, "temp_min": -1, "temp_max": -1},
        "visibility": 10000,
        "wind": {"speed": 6, "deg": 140},
        "clouds": {"all": 40},
        "dt": 1544383660,
        "id": 498817,
        "name": "Saint Petersburg"
    }, {
        "coord": {"lon": -0.13, "lat": 51.51},
        "sys": {"type": 1, "id": 1502, "message": 0.0029, "country": "GB", "sunrise": 1544342079, "sunset": 1544370693},
        "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n"}],
        "main": {"temp": 8.1, "pressure": 1018, "humidity": 75, "temp_min": 8, "temp_max": 9},
        "visibility": 10000,
        "wind": {"speed": 5.1, "deg": 310},
        "clouds": {"all": 20},
        "dt": 1544383660,
        "id": 2643743,
        "name": "London"
    }, {
        "coord": {"lon": -75.5, "lat": 43},
        "sys": {"type": 1, "id": 5681, "message": 0.0054, "country": "US", "sunrise": 1544358131, "sunset": 1544390833},
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
        "main": {"temp": -0.86, "pressure": 1024, "humidity": 55, "temp_min": -1.1, "temp_max": -0.6},
        "visibility": 16093,
        "wind": {"speed": 3.6, "deg": 250},
        "clouds": {"all": 1},
        "dt": 1544383660,
        "id": 5128638,
        "name": "New York"
    }, {
        "coord": {"lon": 121.46, "lat": 31.22},
        "sys": {"type": 1, "id": 9659, "message": 0.0032, "country": "CN", "sunrise": 1544308887, "sunset": 1544345509},
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
        "main": {"temp": 8.52, "pressure": 1028, "humidity": 93, "temp_min": 8, "temp_max": 9},
        "visibility": 7000,
        "wind": {"speed": 5, "deg": 10},
        "clouds": {"all": 75},
        "dt": 1544383660,
        "id": 1796236,
        "name": "Shanghai"
    }, {
        "coord": {"lon": -120.5, "lat": 47.5},
        "sys": {"type": 1, "id": 3917, "message": 0.0023, "country": "US", "sunrise": 1544369922, "sunset": 1544400648},
        "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}],
        "main": {"temp": -1.88, "pressure": 1029, "humidity": 92, "temp_min": -4.4, "temp_max": 0.6},
        "visibility": 16093,
        "wind": {"speed": 0.9, "deg": 67.0002},
        "clouds": {"all": 90},
        "dt": 1544383660,
        "id": 5815135,
        "name": "Washington"
    }]
};

const App = () => <Widget cities={citiesList} />;

export default App;