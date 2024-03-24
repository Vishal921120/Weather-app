/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  windDir,
  iconString,
  conditions,
  maxTemp,
  minTemp,
  unit
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      } else {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[37rem] glassCard p-3'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temperature} &deg;{unit}</p>
      </div>
      <div className='font-bold text-center text-xl' style={{ whiteSpace: 'nowrap',overflow: 'hidden'}}>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Wind Direction</p>
        <p className='text-lg'>{windDir}&deg;</p>
      </div>
      <div className='w-full p-3 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Max Temp</p>
        <p className='text-lg'>{maxTemp}</p>
      </div>
      <div className='w-full p-3 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Min Temp</p>
        <p className='text-lg'>{minTemp}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-2 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCard