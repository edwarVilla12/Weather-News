import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API_SERVER_URL} from '../apis/config';

// Server context instance
export const ServerContext = createContext();

// Execute the get request to the api (database)
export const ServerContextProvider = (props) => {
    const [data,setData] = useState({
        id:'',
        city: '',
        server: ''
    })
    
    const getRequest=async()=>{
        await axios.get(API_SERVER_URL)
        .then(response=>{
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        getRequest();
      },[])

    return (
      <div>
        {Array.isArray(data) 
          ?
        <ServerContext.Provider value={data} >
            {props.children}
        </ServerContext.Provider>
         : '' }
      </div>
    );
};