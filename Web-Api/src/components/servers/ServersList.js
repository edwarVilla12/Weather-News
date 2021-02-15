import React , {useContext, useState, setData} from 'react';
import {ServerContext} from '../../hooks/ServerContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';  
import axios from 'axios';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';
import {API_SERVER_URL} from '../../apis/config';

// Lists the visited servers
const  ServersList = () => {
    
    // Data inicialization
    const {data} =  useContext(ServerContext);
    const [deleteModal, setdeleteModal]=useState(false);
    const [selectedManager, setselectedManager]=useState({
      id: '',
      city: '',
      server: ''
    });

    // Open and Close the delete modal
    const openClosedeleteModal=()=>{
      setdeleteModal(!deleteModal);
    }
    
    // delete the selected server from the table
    const deleteRequest=async()=>{
      await axios.delete(API_SERVER_URL+"/"+ selectedManager.id)
      .then(response=>{
       setData(data.filter(gestor=>gestor.id!==response.data));
        openClosedeleteModal();
      }).catch(error=>{
        console.log(error);
      })
    }

    // return a table with the visited servers
    return(
        <div>
          <div>
          <h1 className="head__Text">Recent visited servers</h1>
          </div> 
          <Table striped bordered hover variant="rm">
          <thead>
          <tr>
            <th>City</th>
            <th>Server</th>
            <th>Action</th>
          </tr>
          </thead>
           <tbody>
           {data.map(gestor=>(
            <tr key={gestor.id}> 
              <td>{gestor.city}</td>
              <td>
                <a href={gestor.server} target="_blank" rel="noreferrer">{gestor.server}</a></td>
              <td>
                <button className="btn btn-danger" onClick={()=>{
                  setselectedManager(gestor);
                  openClosedeleteModal(); 
                }}>Delete</button> {"  "}
              </td>
            </tr>))}
            </tbody>
          </Table>

          <Modal isOpen={deleteModal}>
        <ModalBody>
        ¿Are you sure you want to delete the server?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>{deleteRequest();openClosedeleteModal();}}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=> openClosedeleteModal()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      </div>
    );      
}

export default ServersList;