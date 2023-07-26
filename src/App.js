import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"

  const [data,setData] = useState({})

  const [inputCity,setInputCity] = useState({})

  const handleChangeInput = (event)=>{
    // console.log(event.target.value);
    setInputCity(event.target.value)
  }

  const getWeatherDetails = (cityName)=>{
    if(!cityName) return;
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey

    axios.get(apiURL).then((res)=>{
      console.log("response",res)

      setData(res.data);
    }).catch((err)=>{
      console.log("err",err)
    })

  }

  const handleSearch = ()=>{
    // alert("clicked")
    getWeatherDetails(inputCity)
  }

  // useEffect(()=> {
  //   getWeatherDetails("delhi")
  // },[])

  return (
    <div className="cl-md-12">
      <div className="weatherBg">
        <div className="heading">
          <h1>Weather App</h1>
        </div>
        <div className="d-grid col-4 mt-4">
          <input type="text" onChange={handleChangeInput} className = "form-cotrol" />
          <button className = "btn btn-primary my-3" type = "button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img className = "weatherIcon" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" alt="WeatherIco" />
          <h5 className = "weatherCity">{data?.name}</h5>
          <h6 className = "weatherTemp">{(data?.main?.temp-273.15).toFixed(2)} °C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
