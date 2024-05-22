"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import moment from 'moment';

const Weather = () => {


    type Weather = {
        name: string;
        weather: Array<{
            description: string;
            icon: string;
        }>;
        main: {
            temp: number;
        };
    }

    const [weather, setWeather] = useState<Weather>();
    const [date, setDate] = useState<string>();
    const [week, setWeek] = useState<number>();

    useEffect(() => {
        axios.get<Weather>("https://api.openweathermap.org/data/2.5/weather?lat=59.3251172&lon=18.0710935&units=Metric&appid=9521f719d1de0a040c9b938c487ea19f").then((response) => {
            setWeather(response.data);
        });
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };


        const currentDate = new Date();
        setWeek(moment(currentDate).isoWeek());

        const dates = new Intl.DateTimeFormat('en-SE', options).format(currentDate);

        setDate(`${dates}`);
    }, []);

    return (
        <div >
            {weather ? (
                <div className="flex flex-col">
                    <div className="flex items-center flex-col">
                        <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" width={50} height={50} />
                        <h1>{weather.name}</h1>
                        <p>{weather.weather[0].description}</p>
                        <p>{weather.main.temp}°C</p>
                    </div>
                    <div className="flex justify-center">
                        <p>{date} || Vecka {week}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;