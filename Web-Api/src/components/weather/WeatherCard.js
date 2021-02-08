import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt,temp_min,temp_max,main,icon}) => {
  
  //Date object   
  const date = new Date(dt);
  return (
    <Card >
      <Card.Img variant="top" 
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />

      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/* turn into local time*/}
        {
        <p>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
        }
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;