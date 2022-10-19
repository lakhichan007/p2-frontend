import React, { useEffect, useState } from "react"
import "./contacts.css"
import axios from "axios"
const Contacts = () => {
    const [contacts, setcontacts] = useState([])
    // let contacts= []
    let mytoken = window.localStorage.getItem("token")
    useEffect(() => {

        axios.post("https://contct-manager-backend6.herokuapp.com/show_contacts", { mytoken })
            .then((res) => {
                const data = res.data.data
                setcontacts(data)
            })
            .catch(err => { console.log(err) })

    }, [contacts])

    const todelete=(e,id)=>{
        e.preventDefault();
     axios.delete(`https://contct-manager-backend6.herokuapp.com/delete/${id}`)
        .then((res)=>{

        })
        .catch(err=>{console.log(err)})
    }

    return (
        <>
            {contacts.map((contact) => {
                return (
                    <div id="contact-box" key={contact._id}>
                        <div><input id="check-box" type="checkbox" /></div>
                        <div className="content">{contact.name}</div>
                        <div className="content">{contact.designation}</div>
                        <div className="content">{contact.company}</div>
                        <div className="content">{contact.industry}</div>
                        <div className="content">{contact.email}</div>
                        <div className="content">{contact.phone}</div>
                        <div className="content">{contact.country}</div>
                        <div className="content">
                            <button id="contact-edit-btn"><i id="edit" class="fa fa-pencil" aria-hidden="true"></i></button>
                            <button id="contact-delete-btn" onClick={(e) => todelete(e,contact._id)}><i id="delete" class="fa fa-trash-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Contacts