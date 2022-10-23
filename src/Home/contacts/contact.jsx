import React, { useEffect, useState } from "react"
import "./contacts.css"
import axios from "axios"
import Pagination from "./pagination"
const Contacts = ({setcheckbox}) => {
    const [contacts, setcontacts] = useState([])
    const [currentpage,setcurrentpage]=useState(1)
    const [contactspergage,setcontactperpage]=useState(10)
    let mytoken = window.localStorage.getItem("token")
    useEffect(() => {

        axios.post("http://localhost:8000/show_contacts", { mytoken })
            .then((res) => {
                const data = res.data.data
                setcontacts(data)
            })
            .catch(err => { console.log(err) })

    }, [contacts])

    const contactsSize=contacts.length

    // delete the item by deleteicon....
    const todelete=(e,id)=>{
     axios.delete(`http://localhost:8000/delete/${id}`)
        .then((res)=>{

        })
        .catch(err=>{console.log(err)})
    }
    const selectcheckbox=(myid)=>{

            setcheckbox((previous)=>[... previous,myid])
        
    
    }
    
    const indexOflastcontact= currentpage*contactspergage
    const indexOffirstcontact =indexOflastcontact-contactspergage
    const currentcontacts=contacts.slice(indexOffirstcontact,indexOflastcontact)
    const paginate=(page)=>{
        setcurrentpage(page)
    }
    //  console.log(checkbox)

    return (
        <>
            {currentcontacts.map((contact) => {
                return (
                    <div id="contact-box" key={contact._id}>
                        <div><input id="check-box"  onChange={()=>selectcheckbox(contact._id)} type="checkbox" /></div>
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
            <Pagination contactspergage={contactspergage} totalcontacts={contactsSize} paginate={paginate}/>
        </>
    )
}
export default Contacts