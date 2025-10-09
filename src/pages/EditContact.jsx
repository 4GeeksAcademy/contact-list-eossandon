import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const API_URL = "https://playground.4geeks.com/contact";

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()
    const { theId , theName , theAddress , thePhone , theEmail } = useParams()



    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const puthContact = async (id,name,phone,email,address) => {
        try {
            dispatch({ type: "edit_contact", payload: { name: inputName, phone: inputPhone, email: inputEmail, address: inputAddress } })
            const response = await fetch(`${API_URL}/agendas/esteban/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: inputName,
                    phone: inputPhone,
                    email: inputEmail,
                    address: inputAddress,
                }),
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container mt-5">
            <div className="d-flex align-item-center justify-content-center mb-5">
                <h1>Edit contact</h1>
            </div>
            <form className="form" onSubmit={(e) => { e.preventDefault(); puthContact(parseInt(theId)); }}>
                <div className="mb-3">
                    <label htmlFor="basic-name" className="form-label">Full Name:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-name" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputName(e.target.value)} placeholder={theName} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-address" className="form-label">Address:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-address" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputAddress(e.target.value)} placeholder={theAddress} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-phone" className="form-label">Phone:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-phone" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputPhone(e.target.value)} placeholder={thePhone}  required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-email" className="form-label">Email:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-email" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputEmail(e.target.value)} placeholder={theEmail} required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-100" >Submit</button>
                </div>
                <Link to="/">
                    or get to contacts
                </Link>
            </form>

        </div>
    )
}