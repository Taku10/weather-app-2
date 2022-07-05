


export const WeatherContext = createContext()
export const LocationContext = createContext();

export const WeatherProvider=(props)=>{
    const[data, setData]=useState({});
    const[location, setLocation]=useState('')
    return(
        <>
        
        <WeatherContext.Provider value={data}>
          <LocationContext.Provider value={location}>
              {children}
          </LocationContext.Provider> 
             
        </WeatherContext.Provider>
        
        </>
    )
}