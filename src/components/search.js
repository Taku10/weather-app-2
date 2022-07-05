
import {LocationContext} from '../App'
import {useContext} from 'react';

const Search=({handleChange, search})=>{
    const location = useContext(LocationContext)
    return(
        <div className='search'>
        <input 
          type='text'
          value={location}      
          name='search'
          placeholder='Search City'
          onChange={handleChange}
          onKeyPress = {search}   
        />

        
        
      </div>
    )
}

export default Search;