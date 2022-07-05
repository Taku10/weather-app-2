import '../styles/top.css'

const Top=(props)=>{
    return(
        <div className='top'>
          <div className='location'>
            <h1>Lutzville</h1>
          </div>
          <div className='date-time'>
            <p className='date'>Monday, Jul 04</p>
            <p class>20:30</p>
          </div>
        </div>
    )
}

export default Top;