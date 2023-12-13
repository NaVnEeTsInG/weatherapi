import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
// import  Swapicall from './components/Api';

function Cmp1() {

    const [city, setCity] = useState('Varanasi');
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a1f8a61b74546825af1e0be106e797b`;
    const [humidity, setHumidity] = useState();

    useEffect(() => {
        axios.get(baseURL).then((response) => {

            setHumidity(response.data.main.humidity);
            console.log(response.data.main.humidity);

        }).catch(error => {
            setHumidity("No Data");

            //setError(error);
        });

    }, [city]);

    const cityChange = (event) => {
        let city = event.target.value;

        setCity(city);

        console.log(event.target.value);
    }

    if (!humidity) return (<div>
        <center>
            <input type="text" onChange={cityChange} />
            <p>No Data</p>

        </center>
    </div>);

    return <div>
        <center>
            <input type="text" value={city} onChange={cityChange} />
            <p>Humidity: {(humidity) ? humidity : "No Data"}</p>

        </center>
    </div>;
}

export default Cmp1;

