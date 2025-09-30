import React, { useState, useEffect } from "react";
import Image from "../assets/img/rigo-baby.jpg";
import '../index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://playground.4geeks.com/contact";


export const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    const getAllContact = async () => {
        try {
            const response = await fetch(`${API_URL}/agendas/esteban/contacts`, {
                method: "GET",
            });
            const data = await response.json();
            setContacts(data.contacts || []);


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
                <button className="btn btn-success mt-3 mb-3 " type="button" onClick={() => navigate("./AddContact")}>Agregar usuario</button>
            </div>
            {contacts.map((contacts, index) => (
                <div key={index} className="row border  mb-0">
                    <div className="col-lg-2 col-md-4 col-sm-4 d-flex text-align-center justify-content-center">
                        <img className="img-contact" src={Image} alt="" />
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-5 info-contact ">
                        <h3>{contacts.name}</h3>
                        <h6><i className="bi bi-geo-alt-fill"> {contacts.address}</i></h6>
                        <h6><i className="bi bi-telephone-fill"> {contacts.phone}</i></h6>
                        <h6><i className="bi bi-envelope-open-fill"> {contacts.email}</i></h6>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-3 d-flex text-align-end justify-content-end ">
                        <i className="bi bi-pencil-fill p-4"></i>
                        <i className="bi bi-trash-fill p-4"></i>
                    </div>
                </div>
            ))}
        </div>
    );

}

