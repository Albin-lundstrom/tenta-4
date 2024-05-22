"use client";

import QrCode from "../component/qrcode";
import Weather from "../component/weather";
import Bond from "../component/bond";
import Meet from "../component/meeting";

const Screen = () => { 
    return (
        <div className="bg-gray-900 h-screen">
            <Bond />
            <Weather />
            <QrCode />
            <Meet />
        </div>
    )
}

export default Screen;