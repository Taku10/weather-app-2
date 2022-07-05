import './styles/App.css';
import {useState,createContext} from 'react';
import Top from './components/top'
import Middle from './components/middle'
import Bottom from './components/bottom'
import Search from './components/search'
import axios from 'axios'

export const WeatherContext = createContext()
export const LocationContext = createContext();


const App=(props)=> {
  const[data, setData]=useState({});
  const[location, setLocation]=useState('')

  
  let url = `http://api.weatherapi.com/v1/forecast.json?key=98cfd4a9cea441b184a150044220407&days=7&q=${(location)}`

  

  const searchLocation=(event)=>{
    if(event.key === 'Enter'){
      axios.get(url)
      .then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
      
    }
    setData('')
  }

  const handleChange=(e)=>{
    setLocation(e.target.value);
  }


  return (
    <div className='app'>
      <div className='container'>
      
        <WeatherContext.Provider value={data}>
          <LocationContext.Provider value={location}>
              <Search handleChange={handleChange} search={searchLocation} />
              <Top />
              <Middle />
              <Bottom  />
          </LocationContext.Provider> 
             
        </WeatherContext.Provider>
        
        
      </div>

    </div>
  )
}

export default App;
