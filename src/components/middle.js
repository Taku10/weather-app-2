import '../styles/middle.css'

const Middle =(props) => {

  const cloudy = "//cdn.weatherapi.com/weather/64x64/day/116.png"
    return (
        <div className='middle'>
          <div className='middle-wrapper'>
            <div className='condition'>
              <img src= {cloudy} alt='weather-image' />
              <p>CLOUDY</p> 
            </div>
            <div className='temp'>
              <h1>23°</h1>
            </div>
          </div>
          
          <div className='other-details'>
            <p className='wind'>2 KM/h</p>
            <p className='direction'>WEST</p>
            <p className='rain-chance'>23%</p>
          </div>
        </div>
    )
}

export default Middle;