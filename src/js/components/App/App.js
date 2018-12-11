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

let days = {
    "cod": "200",
    "message": 0.0314,
    "cnt": 40,
    "list": [{
        "dt": 1544529600,
        "main": {
            "temp": 273.84,
            "temp_min": 273.726,
            "temp_max": 273.84,
            "pressure": 1004.07,
            "sea_level": 1024.65,
            "grnd_level": 1004.07,
            "humidity": 98,
            "temp_kf": 0.11
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 2.21, "deg": 173.501},
        "snow": {"3h": 0.121},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-11 12:00:00"
    }, {
        "dt": 1544540400,
        "main": {
            "temp": 273.57,
            "temp_min": 273.484,
            "temp_max": 273.57,
            "pressure": 1005.8,
            "sea_level": 1026.36,
            "grnd_level": 1005.8,
            "humidity": 98,
            "temp_kf": 0.08
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 2.01, "deg": 189.502},
        "snow": {"3h": 0.065},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-11 15:00:00"
    }, {
        "dt": 1544551200,
        "main": {
            "temp": 273.06,
            "temp_min": 273,
            "temp_max": 273.06,
            "pressure": 1007.18,
            "sea_level": 1027.92,
            "grnd_level": 1007.18,
            "humidity": 99,
            "temp_kf": 0.06
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 1.82, "deg": 208.001},
        "snow": {"3h": 0.0325},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-11 18:00:00"
    }, {
        "dt": 1544562000,
        "main": {
            "temp": 272.34,
            "temp_min": 272.309,
            "temp_max": 272.34,
            "pressure": 1008.55,
            "sea_level": 1029.23,
            "grnd_level": 1008.55,
            "humidity": 95,
            "temp_kf": 0.03
        },
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 1.57, "deg": 218.5},
        "snow": {"3h": 0.03},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-11 21:00:00"
    }, {
        "dt": 1544572800,
        "main": {
            "temp": 272.047,
            "temp_min": 272.047,
            "temp_max": 272.047,
            "pressure": 1009.54,
            "sea_level": 1030.3,
            "grnd_level": 1009.54,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 1.16, "deg": 217.501},
        "snow": {"3h": 0.06},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-12 00:00:00"
    }, {
        "dt": 1544583600,
        "main": {
            "temp": 272.078,
            "temp_min": 272.078,
            "temp_max": 272.078,
            "pressure": 1010.28,
            "sea_level": 1031.06,
            "grnd_level": 1010.28,
            "humidity": 97,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 1.16, "deg": 140.501},
        "snow": {"3h": 0.105},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-12 03:00:00"
    }, {
        "dt": 1544594400,
        "main": {
            "temp": 271.852,
            "temp_min": 271.852,
            "temp_max": 271.852,
            "pressure": 1010.97,
            "sea_level": 1031.7,
            "grnd_level": 1010.97,
            "humidity": 96,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 88},
        "wind": {"speed": 0.96, "deg": 76.5002},
        "snow": {"3h": 0.0975},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-12 06:00:00"
    }, {
        "dt": 1544605200,
        "main": {
            "temp": 272.726,
            "temp_min": 272.726,
            "temp_max": 272.726,
            "pressure": 1011.17,
            "sea_level": 1032.01,
            "grnd_level": 1011.17,
            "humidity": 100,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 80},
        "wind": {"speed": 1.76, "deg": 28.0034},
        "snow": {"3h": 0.0425},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-12 09:00:00"
    }, {
        "dt": 1544616000,
        "main": {
            "temp": 272.658,
            "temp_min": 272.658,
            "temp_max": 272.658,
            "pressure": 1011.35,
            "sea_level": 1032.08,
            "grnd_level": 1011.35,
            "humidity": 99,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 76},
        "wind": {"speed": 2.07, "deg": 40.0032},
        "snow": {"3h": 0.0975},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-12 12:00:00"
    }, {
        "dt": 1544626800,
        "main": {
            "temp": 272.223,
            "temp_min": 272.223,
            "temp_max": 272.223,
            "pressure": 1011.27,
            "sea_level": 1032.08,
            "grnd_level": 1011.27,
            "humidity": 96,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 2.96, "deg": 39.0008},
        "snow": {"3h": 0.095},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-12 15:00:00"
    }, {
        "dt": 1544637600,
        "main": {
            "temp": 272.182,
            "temp_min": 272.182,
            "temp_max": 272.182,
            "pressure": 1011.31,
            "sea_level": 1032.09,
            "grnd_level": 1011.31,
            "humidity": 97,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 3.68, "deg": 44.0011},
        "snow": {"3h": 0.08},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-12 18:00:00"
    }, {
        "dt": 1544648400,
        "main": {
            "temp": 271.766,
            "temp_min": 271.766,
            "temp_max": 271.766,
            "pressure": 1011.35,
            "sea_level": 1032.1,
            "grnd_level": 1011.35,
            "humidity": 97,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 4.16, "deg": 48.5021},
        "snow": {"3h": 0.215},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-12 21:00:00"
    }, {
        "dt": 1544659200,
        "main": {
            "temp": 271.728,
            "temp_min": 271.728,
            "temp_max": 271.728,
            "pressure": 1011.19,
            "sea_level": 1032.08,
            "grnd_level": 1011.19,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 5.01, "deg": 52.5013},
        "snow": {"3h": 0.56},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-13 00:00:00"
    }, {
        "dt": 1544670000,
        "main": {
            "temp": 271.242,
            "temp_min": 271.242,
            "temp_max": 271.242,
            "pressure": 1011.53,
            "sea_level": 1032.39,
            "grnd_level": 1011.53,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 5.16, "deg": 58.5017},
        "snow": {"3h": 0.945},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-13 03:00:00"
    }, {
        "dt": 1544680800,
        "main": {
            "temp": 270.727,
            "temp_min": 270.727,
            "temp_max": 270.727,
            "pressure": 1012.11,
            "sea_level": 1033.08,
            "grnd_level": 1012.11,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 5.41, "deg": 60.5072},
        "snow": {"3h": 0.845},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-13 06:00:00"
    }, {
        "dt": 1544691600,
        "main": {
            "temp": 270.548,
            "temp_min": 270.548,
            "temp_max": 270.548,
            "pressure": 1012.92,
            "sea_level": 1033.9,
            "grnd_level": 1012.92,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 5.21, "deg": 64.0031},
        "snow": {"3h": 0.835},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-13 09:00:00"
    }, {
        "dt": 1544702400,
        "main": {
            "temp": 270.269,
            "temp_min": 270.269,
            "temp_max": 270.269,
            "pressure": 1013.32,
            "sea_level": 1034.23,
            "grnd_level": 1013.32,
            "humidity": 95,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 5.02, "deg": 61.5004},
        "snow": {"3h": 0.62},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-13 12:00:00"
    }, {
        "dt": 1544713200,
        "main": {
            "temp": 269.881,
            "temp_min": 269.881,
            "temp_max": 269.881,
            "pressure": 1014.26,
            "sea_level": 1035.27,
            "grnd_level": 1014.26,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 4.7, "deg": 63.0047},
        "snow": {"3h": 0.68},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-13 15:00:00"
    }, {
        "dt": 1544724000,
        "main": {
            "temp": 269.682,
            "temp_min": 269.682,
            "temp_max": 269.682,
            "pressure": 1014.77,
            "sea_level": 1035.89,
            "grnd_level": 1014.77,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 4.42, "deg": 65.5022},
        "snow": {"3h": 0.905},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-13 18:00:00"
    }, {
        "dt": 1544734800,
        "main": {
            "temp": 269.442,
            "temp_min": 269.442,
            "temp_max": 269.442,
            "pressure": 1015.48,
            "sea_level": 1036.55,
            "grnd_level": 1015.48,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.92, "deg": 72.0024},
        "snow": {"3h": 0.545},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-13 21:00:00"
    }, {
        "dt": 1544745600,
        "main": {
            "temp": 269.223,
            "temp_min": 269.223,
            "temp_max": 269.223,
            "pressure": 1016.28,
            "sea_level": 1037.4,
            "grnd_level": 1016.28,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.44, "deg": 72.0035},
        "snow": {"3h": 0.2},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-14 00:00:00"
    }, {
        "dt": 1544756400,
        "main": {
            "temp": 269.085,
            "temp_min": 269.085,
            "temp_max": 269.085,
            "pressure": 1016.76,
            "sea_level": 1037.84,
            "grnd_level": 1016.76,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.21, "deg": 66.0085},
        "snow": {"3h": 0.54},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-14 03:00:00"
    }, {
        "dt": 1544767200,
        "main": {
            "temp": 269.002,
            "temp_min": 269.002,
            "temp_max": 269.002,
            "pressure": 1017.36,
            "sea_level": 1038.44,
            "grnd_level": 1017.36,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.42, "deg": 60.5005},
        "snow": {"3h": 0.285},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-14 06:00:00"
    }, {
        "dt": 1544778000,
        "main": {
            "temp": 269.708,
            "temp_min": 269.708,
            "temp_max": 269.708,
            "pressure": 1018.02,
            "sea_level": 1039.19,
            "grnd_level": 1018.02,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.71, "deg": 61.5012},
        "snow": {"3h": 0.305},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-14 09:00:00"
    }, {
        "dt": 1544788800,
        "main": {
            "temp": 269.866,
            "temp_min": 269.866,
            "temp_max": 269.866,
            "pressure": 1018.63,
            "sea_level": 1039.81,
            "grnd_level": 1018.63,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.53, "deg": 58.0106},
        "snow": {"3h": 0.12},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-14 12:00:00"
    }, {
        "dt": 1544799600,
        "main": {
            "temp": 269.479,
            "temp_min": 269.479,
            "temp_max": 269.479,
            "pressure": 1019.87,
            "sea_level": 1041.07,
            "grnd_level": 1019.87,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 92},
        "wind": {"speed": 3.71, "deg": 51.503},
        "snow": {"3h": 0.145},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-14 15:00:00"
    }, {
        "dt": 1544810400,
        "main": {
            "temp": 268.53,
            "temp_min": 268.53,
            "temp_max": 268.53,
            "pressure": 1020.96,
            "sea_level": 1042.11,
            "grnd_level": 1020.96,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "clouds": {"all": 80},
        "wind": {"speed": 3.63, "deg": 44.5017},
        "snow": {"3h": 0.029999999999999},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-14 18:00:00"
    }, {
        "dt": 1544821200,
        "main": {
            "temp": 268.611,
            "temp_min": 268.611,
            "temp_max": 268.611,
            "pressure": 1021.75,
            "sea_level": 1043.11,
            "grnd_level": 1021.75,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 3.46, "deg": 41.5034},
        "snow": {"3h": 0.075000000000001},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-14 21:00:00"
    }, {
        "dt": 1544832000,
        "main": {
            "temp": 268.574,
            "temp_min": 268.574,
            "temp_max": 268.574,
            "pressure": 1022.66,
            "sea_level": 1044.08,
            "grnd_level": 1022.66,
            "humidity": 94,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 3.63, "deg": 36.5},
        "snow": {"3h": 0.07},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-15 00:00:00"
    }, {
        "dt": 1544842800,
        "main": {
            "temp": 268.168,
            "temp_min": 268.168,
            "temp_max": 268.168,
            "pressure": 1023.65,
            "sea_level": 1045.07,
            "grnd_level": 1023.65,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 88},
        "wind": {"speed": 3.71, "deg": 32.0016},
        "snow": {"3h": 0.074999999999999},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-15 03:00:00"
    }, {
        "dt": 1544853600,
        "main": {
            "temp": 267.319,
            "temp_min": 267.319,
            "temp_max": 267.319,
            "pressure": 1025.07,
            "sea_level": 1046.63,
            "grnd_level": 1025.07,
            "humidity": 87,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 76},
        "wind": {"speed": 3.56, "deg": 30.5007},
        "snow": {"3h": 0.09},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-15 06:00:00"
    }, {
        "dt": 1544864400,
        "main": {
            "temp": 266.508,
            "temp_min": 266.508,
            "temp_max": 266.508,
            "pressure": 1026.56,
            "sea_level": 1048.13,
            "grnd_level": 1026.56,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 68},
        "wind": {"speed": 3.57, "deg": 33.0013},
        "snow": {"3h": 0.07},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-15 09:00:00"
    }, {
        "dt": 1544875200,
        "main": {
            "temp": 265.873,
            "temp_min": 265.873,
            "temp_max": 265.873,
            "pressure": 1027.7,
            "sea_level": 1049.39,
            "grnd_level": 1027.7,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 56},
        "wind": {"speed": 3.1, "deg": 23.001},
        "snow": {"3h": 0.045},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-15 12:00:00"
    }, {
        "dt": 1544886000,
        "main": {
            "temp": 264.136,
            "temp_min": 264.136,
            "temp_max": 264.136,
            "pressure": 1029.36,
            "sea_level": 1051.11,
            "grnd_level": 1029.36,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "clouds": {"all": 0},
        "wind": {"speed": 2.96, "deg": 19.0041},
        "snow": {"3h": 0.015000000000001},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-15 15:00:00"
    }, {
        "dt": 1544896800,
        "main": {
            "temp": 259.601,
            "temp_min": 259.601,
            "temp_max": 259.601,
            "pressure": 1030.47,
            "sea_level": 1052.36,
            "grnd_level": 1030.47,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "clouds": {"all": 0},
        "wind": {"speed": 2.77, "deg": 3.00339},
        "snow": {},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-15 18:00:00"
    }, {
        "dt": 1544907600,
        "main": {
            "temp": 257.841,
            "temp_min": 257.841,
            "temp_max": 257.841,
            "pressure": 1031.3,
            "sea_level": 1053.29,
            "grnd_level": 1031.3,
            "humidity": 80,
            "temp_kf": 0
        },
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "clouds": {"all": 20},
        "wind": {"speed": 2.55, "deg": 348.003},
        "snow": {"3h": 0.024999999999999},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-15 21:00:00"
    }, {
        "dt": 1544918400,
        "main": {
            "temp": 258.423,
            "temp_min": 258.423,
            "temp_max": 258.423,
            "pressure": 1032,
            "sea_level": 1053.94,
            "grnd_level": 1032,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 36},
        "wind": {"speed": 2.41, "deg": 339.503},
        "snow": {"3h": 0.030000000000001},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-16 00:00:00"
    }, {
        "dt": 1544929200,
        "main": {
            "temp": 258.345,
            "temp_min": 258.345,
            "temp_max": 258.345,
            "pressure": 1032.3,
            "sea_level": 1054.28,
            "grnd_level": 1032.3,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13n"}],
        "clouds": {"all": 36},
        "wind": {"speed": 2.29, "deg": 342.502},
        "snow": {"3h": 0.035},
        "sys": {"pod": "n"},
        "dt_txt": "2018-12-16 03:00:00"
    }, {
        "dt": 1544940000,
        "main": {
            "temp": 258.131,
            "temp_min": 258.131,
            "temp_max": 258.131,
            "pressure": 1032.46,
            "sea_level": 1054.53,
            "grnd_level": 1032.46,
            "humidity": 87,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 36},
        "wind": {"speed": 1.96, "deg": 338.006},
        "snow": {"3h": 0.039999999999999},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-16 06:00:00"
    }, {
        "dt": 1544950800,
        "main": {
            "temp": 260.717,
            "temp_min": 260.717,
            "temp_max": 260.717,
            "pressure": 1032.87,
            "sea_level": 1054.85,
            "grnd_level": 1032.87,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "clouds": {"all": 56},
        "wind": {"speed": 1.85, "deg": 349.507},
        "snow": {"3h": 0.045},
        "sys": {"pod": "d"},
        "dt_txt": "2018-12-16 09:00:00"
    }],
    "city": {"id": 524901, "name": "Moscow", "coord": {"lat": 55.7522, "lon": 37.6156}, "country": "RU"}
};

const App = () => <Widget cities={citiesList} days={days}/>;

export default App;