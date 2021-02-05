import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API_NEWS_KEY} from '../apis/config';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data,setData] = useState();
    

    useEffect(() => {
        axios.get(
            `http://newsapi.org/v2/everything?q=rich&from=2021-02-01&sortBy=publishedAt&apiKey=${API_NEWS_KEY}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    },[data]);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};