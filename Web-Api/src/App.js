import React, {createContext, useEffect, useState}  from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_BASE_URL, API_KEY} from './apis/config'
import WeatherList from './components/WeatherList';
import News from './components/News';
import {NewsContextProvider} from './hooks/NewsContext';


const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  

// error handling 
const getContent = () => {
  if(error) return <h2>Error: {error}</h2>
  if(!data && isLoading) return <h2>LOADING...</h2>
  if(!data) return null;
  return <WeatherList weathers={data.list} />
};

  return (
    <div>
        <Container className="weather">
          <CitySelector crossorigin src="http://api.openweathermap.org/" onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />
          {getContent()}
        </Container>
      <Container className="weather">
        <NewsContextProvider crossorigin src="https://cors-anywhere.herokuapp.com/">
          <News />
        </NewsContextProvider>
        </Container>
    </div>
  );
};

export default App;