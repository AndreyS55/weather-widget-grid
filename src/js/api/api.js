const cityIdList = {
    "moscow": 524901,
    "saint_petersburg": 498817,
    "london": 2643743,
    "new_york": 5128638,
    "shanghai": 1796236,
    "washington": 5815135
};

// ${cityIdList.moscow}, ${cityIdList.saint_petersburg},${cityIdList.london},${cityIdList.new_york},${cityIdList.shanghai},${cityIdList.washington}
const API_KEY = '&APPID=dad4f150c54a21c6d1e40df6c6832096';
const API_CITY_URL = `http://api.openweathermap.org/data/2.5/group?id=${Object.values(cityIdList).join(',')}&units=metric${API_KEY}`;
const API_DAY_URL = `http://api.openweathermap.org/data/2.5/forecast?id=`;


const fetchCityTemp = (citiesList) => {
    fetch(API_CITY_URL)
        .then((response) => response.json())
        .then((json) => {
            citiesList = json;
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
};

const fetchDayTemp = (dayList) => {
    for (let key in cityIdList) {
        fetch(API_DAY_URL + cityIdList[key] + API_KEY)
            .then((response) => response.json())
            .then((json) => {
                dayList.push(json);
                // this.setState({cities: json.list})
                // const days = JSON.stringify(json);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }
};

const fetchData = (citiesList, dayList) => {
    fetchCityTemp(citiesList);
    fetchDayTemp(dayList);
};

export default fetchData;