import '../styles/middle.css'
import {WeatherContext} from '../App'
import { useContext } from 'react'
const Middle =(props) => {

  const data = useContext(WeatherContext)
    return (
        <div className='middle'>
          <div className='middle-wrapper'>
            <div className='condition'>
              {data.current ?<img src={data.current.condition.icon} alt='weather-image' />: null}
              {data.current ?<p>{data.current.condition.text.toUpperCase()}</p>:null }
            </div>
            <div className='temp'>
            {data.current ?<h1>{data.current.temp_c.toFixed()}°</h1>:null }
            </div>
          </div>
          
          <div className='other-details'>
           {data.current ? <p className='wind'>{data.current.wind_kph.toFixed()} KMH</p>: null}
            {data.current ? <p className='direction'>{data.current.wind_dir}</p>: null}
            {data.current ? <p className='rain-chance'>{data.current.humidity}%</p>: null}
          </div>
        </div>
    )
}

export default Middle;