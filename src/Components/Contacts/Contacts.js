import { Fragment, useState } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


const Contacts = (props)=>{
    const {contact} = props
    const navigate = useNavigate()
   
    const onClickContact = ()=>{
        navigate(`/contact/${contact.id}`)
    }
  
    return(
        <Fragment>
           
            <div onClick={()=>onClickContact()}   className='contact-comp'>
                <p className='contact-name'>{contact.name}</p>  <br/>
                <p className='contact-no'>{contact.phNo}</p>                
            </div>
           
        </Fragment>
    )
}

const ContactList = (props)=>{
    const {contactsData} = props
    contactsData.sort((a, b) => a.name.localeCompare(b.name))

    const navigate = useNavigate()
    return(
        <Fragment>
            <div className='contact-card'>
                <div className='heads'>
                    
                   <h1 onClick={()=>navigate('/callLog')} className='heading'>Recent</h1>
                    
                    <h1 onClick={()=>navigate('/')} className='heading'>Add Contact</h1>
                </div>
                <div>
                    <ul>
                        {contactsData.map((eactItem)=><Contacts key={eactItem.id} contact={eactItem}/>)}
                    </ul>
                </div>

            </div>
        </Fragment>
    )
}


export default ContactList