import React , {useContext} from 'react';
import {ServerContext} from '../../hooks/ServerContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';  

function ServersList(props){
  
    // ServerContext instance  to retrieve data
    const data =  useContext(ServerContext);

    return(
        <div>
          <div>
          <h1 className="head__Text">Recent visited servers</h1>
          </div> 
          <Table striped bordered hover variant="rm">
          <thead>
          <tr>
            <th>Id</th>
            <th>City</th>
            <th>Server</th>
          </tr>
          </thead>
           <tbody>
           {data.map(gestor=>(
            <tr key={gestor.id}> 
              <td>{gestor.id}</td>
              <td>{gestor.city}</td>
              <td><a href={gestor.server} target="_blank" rel="noreferrer">{gestor.server}</a></td>
            </tr>))}
            </tbody>
          </Table>
      </div>
    );        
}

export default ServersList;