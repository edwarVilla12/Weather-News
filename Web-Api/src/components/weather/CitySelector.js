import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_SERVER_URL} from '../../apis/config';
import axios from 'axios';

// constants used to create the server url for the data.server value.
const api = "http://api.openweathermap.org//data/2.5/forecast?q=";
const endpoint = "&cnt=5&appid=c0cb1c5d7eacb96bf56b49775efdc6ee";

// Component used to store the CitySelector logic
const CitySelector = ({onSearch} ) => {
    const [city, setCity] = useState('');
    const [data,setData] = useState({
      id: '',
      city: '',
      server: ''
    })
   
    // post request to send data (city - server)to the database
    const postRequest=async()=>{
      delete data.id;
      data.city =  city;
      data.server = api + city + endpoint ;
      await axios.post(API_SERVER_URL, data)
      .then(response=>{
        setData(data.concat(response.data));
      }).catch(error=>{
        console.log(error);
      })
    }

    return (
      <>
        <Row>
          <Col>
            <h1>Enter a city</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => {
                setCity(event.target.value);
              }} 
              value={city}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <Button onClick={() => {
              onSearch(city);
           <div> {!city ? '': postRequest()} </div>  
          
            }}
          >Weather Forecast</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;