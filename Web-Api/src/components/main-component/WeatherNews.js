import React from 'react';
import {Container} from 'react-bootstrap';
import UseFetch from '../../hooks/UseFetch';
import {NewsContextProvider} from '../../hooks/NewsContext';
import {ServerContextProvider} from '../../hooks/ServerContext';
import {API_BASE_URL, API_KEY} from '../../apis/config'
import WeatherList from '../weather/WeatherList';
import CitySelector from '../weather/CitySelector';
import News from '../news/News';
import ServersList from '../servers/ServersList';

/**
 * Main component used to encapsulate <News/>, <Server /> and <Weather/> components
 */
const WeatherNews = () => {
    
    const {data, error, isLoading, setUrl} = UseFetch();

    // error handling for the <News/> component
    const getContent = () => {
        if(error) return <h2>Error: {error}</h2>
        if(!data && isLoading) return <h2>LOADING DATA, PLEASE WAIT...</h2>
        if(!data) return null;
        return <WeatherList weathers={data.list} />
    };

  /** Return the WeatherNews App */
  return (
    <div>
      <Container className="weather">
        <CitySelector  onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`) } />
        {getContent()}
        <NewsContextProvider>
          <News />
        </NewsContextProvider>
        <ServerContextProvider>
          <ServersList />
        </ServerContextProvider>
        </Container>
    </div>
  );
};

export default WeatherNews;