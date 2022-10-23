import React from "react";
import axios from "axios";
import "./popup.css"
import { parse } from "papaparse"
import { useState } from "react";
import { useEffect } from "react";


const Popup = (props) => {
    const [contact, setcontact] = useState([])
    useEffect(() => {
        let mytoken=window.localStorage.getItem("token")
        axios.post(`http://localhost:8000/addContact`, {contact,mytoken})
            .then((res) => {

            })


    }, [contact])
    
    if (!props.show) {
        return null
    }
    console.log(contact)
    return (
        <>
            <div id="drag-drop-box"
                onDragOver={(event) => {
                    event.preventDefault()
                    console.log("dragging over")
                }}

                onDrop={async (event) => {
                    event.preventDefault()
                    Array.from(event.dataTransfer.files).map(async file => {
                        let text = await file.text()
                        let contactArr = parse(text).data

                        contactArr.map(ele => {
                            const obj = { "name": ele[0], "designation": ele[1], "company": ele[2], "industry": ele[3], "email": ele[4], "phone": ele[5], "country": ele[6] }
                            setcontact((contact) => [...contact, obj])
                        })

                    })

                }}
            >
                <div id="pop-div">
                <i class="fa fa-file fa-2x"  aria-hidden="true"></i>
                <h5>Import file!</h5>
                <p>Drag and Drop file here...</p>
                <button id="popup-btn" onClick={props.close}>cancel</button>
                </div>
            </div>

        </>
    )
}

export default Popup