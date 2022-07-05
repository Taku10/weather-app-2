import '../styles/top.css'
import {WeatherContext} from '../App'
import {useContext} from 'react'

const Top=(props)=>{

  const data =useContext(WeatherContext)
  const days = ['Sun', 'Mon', 'Tues', 'Wedn', 'Thurs', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Septe', 'Oct', 'Nov', 'Dec'];
  const now = new Date();
console.log(days[now.getDay()] + ', ' +now.getDate()  + ' ' + months[now.getMonth()] + ' ' + now.getFullYear());
const date = days[now.getDay()] + ', ' +now.getDate()  + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();

    return(
        <div className='top'>
          <div className='location'>
            {data.location ? <h1>{data.location.name}</h1>: null}
          </div>
          <div className='date-time'>
            <p className='date'>{date}</p>
            {data.location ? <p className='time'>{data.location.localtime.slice(11,16)}</p> :null}
          </div>
        </div>
    )
}

export default Top;