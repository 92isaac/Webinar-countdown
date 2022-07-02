import React, { useEffect, useRef, useState } from 'react';
// import './countdown.css';

const Countdown = () => {
    const [countdown, setCountdown] = useState({day:0, hours:0, minutes:0, seconds:0})
    let interval = useRef()


    const timer=()=>{
    const currentDate = new Date();

    interval = setInterval(()=>{
        const futureDate = new Date('July 17, 2022 16:16:00');
        const webinar = futureDate - currentDate;
        const day =Math.floor(webinar / 1000 / 3600 /24)
        const hours = Math.floor(webinar /1000 / 3600) % 24
        const minutes = Math.floor(webinar /1000 / 60) % 60
        const seconds = Math.floor(webinar /1000 ) % 60
        webinar < 0 ? clearInterval(interval.current) : setCountdown({day:day, hours:hours, minutes:minutes, seconds:seconds});

    }, 1000)

}
    useEffect(()=>{
        timer();
        // return clearInterval(interval.current);
    })

  return (
   <div className="webinar-container">
    <div className='web-link'>
    <h2>Webinar in</h2>
     <div className='count'>
        <p>{countdown.day < 10 ? `0${countdown.day}` : countdown.day}</p>
        <p>{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</p>
        <p>{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}</p>
        <p>{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</p>
    </div>
    <h4>Check your email for the link to the webinar</h4>
    </div>
   </div>
  )
}

export default Countdown