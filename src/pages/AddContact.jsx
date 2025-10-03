import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const API_URL = "https://playground.4geeks.com/contact";


export const AddContact = () => {
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const postContact = async () => {
        try {
            const response = await fetch(`${API_URL}/agendas/esteban/contacts`, {
                method: "POST",
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
            <form className="form" onSubmit={(e) => { e.preventDefault(); postContact(); }}>
                <div className="mb-3">
                    <label htmlFor="basic-name" className="form-label">Full Name:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-name" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputName(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-address" className="form-label">Address:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-address" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputAddress(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-phone" className="form-label">Phone:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-phone" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputPhone(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="basic-email" className="form-label">Email:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="basic-email" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputEmail(e.target.value)} required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-100" >Submit</button>
                </div>
            </form>

        </div>
    )
}