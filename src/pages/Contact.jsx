import React, { useState, useEffect } from "react";
import Image from "../assets/img/contact.jpg";
import '../index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.



const API_URL = "https://playground.4geeks.com/contact";


export const Contact = () => {
    const [selectedId, setSelectedId] = useState(null);
    const { store, dispatch } = useGlobalReducer()


    const postAgenda = async () => {
        try {
            const response = await fetch(`${API_URL}/agendas/esteban`, {
                method: "POST",
            });
            getAllContact()
        } catch (error) {
            console.log(error);
        }
    };

    const getAllContact = async () => {
        try {
            const response = await fetch(`${API_URL}/agendas/esteban/contacts`, {
                method: "GET",
            });
            if (!response.ok) {
                postAgenda()
            }
            const data = await response.json();
            dispatch({ type: "set_contacts", payload: data.contacts || [] });
        } catch (error) {
            console.log(error);
        }
    };

    const delContact = async (id) => {
        try {
            const response = await fetch(`${API_URL}/agendas/esteban/contacts/${id}`, {
                method: "DELETE",
            });
            getAllContact();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllContact();
    }, []);


    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <Link to="/add">
                    <button className="btn btn-success mt-3 mb-3 " >Add new contact</button>
                </Link>
            </div>
            {store && store.contacts?.map((item) => (
                <div key={item.id} className="row border mb-0">
                    <div className="col-lg-2 col-md-4 col-sm-4 col-5  d-flex text-align-center justify-content-center">
                        <img className="img-contact" src={Image} alt="" />
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-5 col-3 info-contact ">
                        <h3>{item.name}</h3>
                        <h6><i className="bi bi-geo-alt-fill"> {item.address }</i></h6>
                        <h6><i className="bi bi-telephone-fill"> {item.phone}</i></h6>
                        <h6><i className="bi bi-envelope-open-fill"> {item.email}</i></h6>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-3 col-4 d-flex text-align-end justify-content-end ">
                        <Link className="ex" to={`/edit/${item.id}/${item.name}/${item.phone}/${item.email}/${item.address}`}>
                            <i className="bi bi-pencil-fill ex"></i>
                        </Link>
                        <i className="bi bi-trash-fill  ex" data-bs-toggle="modal" data-bs-target={`#exampleModal-${item.id}`}></i>
                    </div>
                    <div className="modal fade" id={`exampleModal-${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete contacts</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-id ={item.id}></button>
                                </div>
                                <div className="modal-body">
                                    ¿Desea eliminar a {item.name} ?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={() => delContact(item.id)} data-bs-dismiss="modal" >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

