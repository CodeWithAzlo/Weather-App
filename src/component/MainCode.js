import React,{useState} from 'react'
import axios from 'axios';

const MainCode = () => {
    const[data, setData] = useState({})
    const[location, setLocation] = useState(' ')
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=18a253d124bc5a4a9ede7c4d81000bf8`
    
    const searchLocation = (event) =>{
      if(event.key === `Enter`){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className='app'>
  
    <div className="search">
    <input
    value={location}
    onChange={event => setLocation(event.target.value)}
    onKeyPress={searchLocation}
    placeholder='Enter The Location...To Find The Weather...'
    type="text"  />
    </div>
    <div className='container'>
    <div className="top">
    <div className="location">
    <p>{data.name}</p>
    
    </div>
    <div className="tem">
    {data.main? <h1>{data.main.temp.toFixed()}° C</h1>: null}
   
    </div>
    <div className="descrip">
    <h1>{data.weather ? <p>{data.weather[0].main}</p>:null}</h1>
    </div>
    </div>
    <div className="bottom">
    <div className="feels">
    {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p>:null}
    <p>Feels Like</p>
    </div>
    <div className="humidity">
   {data.main ? <p className='bold'>{data.main.humidity.toFixed()}</p>:null}
    <p>Humidity</p>
  
    </div>
    <div className="wind">
    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p>:null}
    <p>Wind speed</p>
  
    </div>
    </div>
    </div>
    </div>
  )
}

export default MainCode
