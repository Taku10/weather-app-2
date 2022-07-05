import './styles/App.css';
import {useState} from 'react';
import Top from './components/top'
import Middle from './components/middle'
import Bottom from './components/bottom'

const App=(props)=> {
  const[data, setData]=useState({});
  const[location, setLocation]=useState('')

  const url =`http://api.weatherapi.com/v1/current.json?key=98cfd4a9cea441b184a150044220407&q=${location}`
  

  const handleChange=(e)=>{
    setLocation(e.target.event);
  }


  return (
    <div className='app'>
      <div className='container'>
      <div className='search'>
        <input 
          type='text'
          value={location}      
          name='search'
          placeholder='Search City'
          onChange={handleChange}
          // onKeyPress = {searchLocation}   
        />
      </div>
        <Top />
        <Middle />
        <Bottom />

        
        
      </div>

    </div>
  )
}

export default App;
