import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from 'axios'
import "./home.css"

function Home() {

  const [statussource, setStatussource] = useState("")
  const [statusdestnation, setStatusdestination] = useState("")

  const initialvalues = {
    start: "",
    destination: ""
  }
  const validationSchema = Yup.object().shape({
    start: Yup.string().min(3).max(15).required(),
    destination: Yup.string().min(3).max(15).required(),
  })

  const OnSubmit = (data) => {

    const options1 = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${data.start}`,
      },
      headers: {
        'X-RapidAPI-Key': '647463ac36msh4285ae7fd58dce1p11c78fjsn4ef3ff5db0b9',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    };

    const options2 = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${data.destination}`,
      },
      headers: {
        'X-RapidAPI-Key': '647463ac36msh4285ae7fd58dce1p11c78fjsn4ef3ff5db0b9',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    };

    axios.request(options1).then(function (response) {
      setStatussource(response.data.weather[0].main)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    axios.request(options2).then(function (response) {
      setStatusdestination(response.data.weather[0].main)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
   
    if(statussource!=="Rainy"&& statusdestnation!=="Rainy"){
      alert("You are Ready To GO")
      const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
        params: {
          q: `${data.start}`,
        },
        headers: {
          'X-RapidAPI-Key': '647463ac36msh4285ae7fd58dce1p11c78fjsn4ef3ff5db0b9',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data.list);
      }).catch(function (error) {
        console.error(error);
      });
    }
    else{
      alert("Sorry! It's Raining. Try at a Different Time.")
    }
  }
  
  return (
    <div className='home-container'>
      <div className='homeWrapper'>
        <div className='homeLeft'>
          <h3 className="loginLogo">CanIGo? </h3>
          <span className="loginDesc">Know Weather there are raining ? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p>Source: {statussource}</p>
          <p>Destination:{statusdestnation}</p>
        </div>

        <div className='homeRight'>
          <Formik initialValues={initialvalues} onSubmit={OnSubmit} validationSchema={validationSchema}>
            <Form>
              <div className="inputBox">
                <Field type="text" className="homeInput" name="start" placeholder="Start Location" autoComplete="false" />
                <ErrorMessage name="start" component="span" />
                <Field type="text" className="homeInput" name="destination" placeholder="Destination" autoComplete="false" />
                <ErrorMessage name="destination" component="span" />
                <button className="homeButton" type='submit'>Check Status</button>
              </div>
            </Form>
          </Formik>

        </div>
      </div>
    </div>
  )
}

export default Home