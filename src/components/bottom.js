import '../styles/bottom.css'

const Bottom =(props)=>{
  const cloudy = "//cdn.weatherapi.com/weather/64x64/day/116.png"
    return(
        <div className='bottom'>
          <div className='forecast'>
            <div className='mon days'>
              <p>MON</p>
              <img src={cloudy} alt='mon-image' />
              <p>21°C</p>
            </div>
            <div className='tues days'>
              <p>TUES</p>
              <img src={cloudy} alt='tues-image' />
              <p>25°C</p>
            </div>
            <div className='wed days'>
              <p>WED</p>
              <img src={cloudy} alt='wed-image' />
              <p>28°C</p>
            </div>
            <div className='thur days'>
              <p>THU</p>
              <img src={cloudy} alt='thur-image' />
              <p>21°C</p>
            </div>
            <div className='fri days'>
              <p>FRI</p>
              <img src={cloudy} alt='fri-image' />
              <p>27°C</p>
            </div>

          </div>
        </div>
    )
}

export default Bottom;