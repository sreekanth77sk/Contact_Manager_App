import { Link, useNavigate, useParams } from 'react-router-dom'
import './ViewContact.css'
import { Fragment, useEffect } from 'react'
import { IoMdCall } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const OneContact = (props)=>{
    const {addContacts,contacts, callLog, setCallLog} = props
    const {id} = useParams()
   const navigate = useNavigate()
    
    const filteredContacts = contacts.filter((c)=>c.id==id)
    const contact = filteredContacts[0]
    
    const deleteContact = ()=>{
        const afterDeleteContacts = contacts.filter((c)=>c.id !== id)
        addContacts(afterDeleteContacts)
        localStorage.setItem('allContacts', JSON.stringify(afterDeleteContacts))
        const afterDeleteCallLog = callLog.filter((c)=>c.id !== id)
        localStorage.setItem('callHistory', JSON.stringify(afterDeleteCallLog))
        navigate('/contacts')
    }

    const handleCall = ()=>{
        const newCallLog = [contact,...callLog]
        setCallLog(newCallLog)
        localStorage.setItem('callHistory',JSON.stringify(newCallLog))
        
    }
    useEffect(()=>{
        let savedCallHistory = JSON.parse(localStorage.getItem('callHistory'))
        if(savedCallHistory){setCallLog(savedCallHistory)}
    },[])
    
   
     
    

    return(
        <div className='contact-container'>
            
            <div className='view-contact'>
                    <div className='contact-details'>
                        <h3 className='c-name'>{contact.name}</h3>
                        <p className='c-number'>{contact.phNo}</p>
                    </div>
                <div className='icons'>
                         <Link  to={'/contacts'}>
                                <IoArrowBack className='icon' />
                        </Link>

                        <Link to={`/calling/${id}`} >
                                <IoMdCall className='icon' onClick={()=>handleCall()} /> <br/>
                        </Link>
                       

                        {contact.add ? <MdDelete className='del-icon' onClick={()=>deleteContact()} /> : null}
                </div>
            </div>
            </div>
    )
}


export default OneContact


