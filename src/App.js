import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header';
import Card from "./card";
import {API_KEY} from "./Constants/index"


function App() {

  const dateArray = [
    '2020-06-11',
    '2020-06-10',
    '2020-06-09',
    '2020-06-08',
  ]

  const [nasaData, setNasaData] = useState('')
  const [date, setDate] = useState(dateArray[0])
  const [dateIndex, setDateIndex] = useState(0)

  const dateButtonHandler = event => {
    setDateIndex(dateIndex + 1)
    setDate(dateArray[dateIndex])
  }
 


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
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
  },[date])


  return (
    <div className="App">
      <Header />
      <Card cardData={nasaData}/>
      <button onClick={dateButtonHandler}> 
        Click here for {date}'s picture
      </button>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    </div>
  );
}

export default App;
