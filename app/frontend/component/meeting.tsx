"use client";

import { useEffect, useState } from "react";
import axios from 'axios'

const Meet = () => {
    const [meet, setMeet] = useState<boolean>();
    const [date, setDate] = useState<string>('');

    useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.getTime().toString());
    
    }, []);

    

    useEffect(() => {
        axios.get('/meet.json').then((response) => {
            console.log(response.data)
            const formattedTime = `${String(new Date(Number.parseInt(date, 10)).getUTCHours()).padStart(2, '0')}${String(new Date(Number.parseInt(date, 10)).getUTCMinutes()).padStart(2, '0')}`;
            if(formattedTime in response.data){
                setMeet(true);
            }
        });
    }, [date]);

    return (
        <div className="flex flex-col bg-cover w-screen">            
            <div className="flex items-center flex-col">
                {meet ? (
                    <button type="button" className="bg-red-700 w-screen text-center" onClick={() => alert("Bond Is In A Metting")}>
                        <p>In Metting</p>
                    </button>
                ) : (
                    <button type="button" className="bg-lime-500 w-screen text-center" onClick={() => alert("Bond Is Free")}>
                        <p>Free</p>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Meet;