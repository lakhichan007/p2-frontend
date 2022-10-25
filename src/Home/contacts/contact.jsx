import React, { useEffect, useState } from "react"
import "./contacts.css"
import axios from "axios"
import Pagination from "./pagination"
const Contacts = ({setcheckbox,querry}) => {
    const [contacts, setcontacts] = useState([])
    const [currentpage,setcurrentpage]=useState(1)
    const [contactspergage,setcontactperpage]=useState(10)
    let mytoken = window.localStorage.getItem("token")
    useEffect(() => {

        axios.post("https://contct-manager-backend6.herokuapp.com/show_contacts", { mytoken })
            .then((res) => {
                const data = res.data.data
                setcontacts(data)
            })
            .catch(err => { console.log(err) })

    }, [contacts])

    const contactsSize=contacts.length
    
    // delete the item by deleteicon....
    const todelete=(e,id)=>{
     axios.delete(`https://contct-manager-backend6.herokuapp.com/delete/${id}`)
        .then((res)=>{

        })
        .catch(err=>{console.log(err)})
    }
    const selectcheckbox=(myid)=>{

            setcheckbox((previous)=>[... previous,myid])
        
    
    }
    
    const indexOflastcontact= currentpage*contactspergage
    const indexOffirstcontact =indexOflastcontact-contactspergage
    let currentcontacts=contacts.slice(indexOffirstcontact,indexOflastcontact)
    const paginate=(page)=>{
        setcurrentpage(page)
    }
    //search by querry........
    const myContacts=contacts.filter((contact)=>{
        return contact.email.includes(querry)
    })
    // console.log(querry)
    // console.log(myContacts)
    if(querry==""){
        currentcontacts=currentcontacts
    }
    else{
        currentcontacts=myContacts
    }
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