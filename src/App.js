import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header';
import Card from "./card";
import {API_KEY} from "./Constants/index"


function App() {

  const [nasaData, setNasaData] = useState('')


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        console.log("done")
      })
  },[])


  return (
    <div className="App">
      <Header />
      <Card cardData={nasaData}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
