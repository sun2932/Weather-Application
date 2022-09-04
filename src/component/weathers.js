import React, {useEffect, useState } from 'react'

const Weathers = ({tempInfo}) => {
    const [weatherState,setWeatherState]=React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=tempInfo


    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/1146/1146869.png")
                    break;
                case "Rain":
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/1146/1146858.png")
                    break;
                case "Haze":
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/1779/1779807.png")
                    break;
                case "Storm":
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/1146/1146860.png")
                    break;
                case "Snow":
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/2315/2315309.png")            

                default:
                    setWeatherState("https://cdn-icons-png.flaticon.com/128/869/869869.png")
                    break;
            }
        }
    },[weathermood])

    let second=sunset;
    let date=new Date(second*1000);
    let Time=`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
           {/* <i className={`wi ${weatherState}`}></i> */}
           <img src={weatherState}></img>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>{name} {country}</div>
            </div>
        </div>    
            <div className='date'>{new Date().toLocaleString()}</div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-sunset'}></i></p>
                        <p className='extra-info-leftside'>{Time} <br></br> sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-humidity'}></i></p>
                        <p className='extra-info-leftside'>{humidity} <br></br> Humidity</p>
                    </div>   
                </div>
                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-rain'}></i></p>
                        <p className='extra-info-leftside'>{pressure} <br></br> Pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-strong-wind'}></i></p>
                        <p className='extra-info-leftside'>{speed}<br></br> Speed</p>
                    </div>   
                </div>

            </div>
    </article>
    </>
  )
}

export default Weathers
