import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Calling.css'


function Calling (props){
    const {contacts} = props

    const {callerId} = useParams()
    const navigate = useNavigate()

    const filteredContacts = contacts.filter((c)=>c.id==callerId)
    const contact = filteredContacts[0]

    const handleEndCall = ()=>{            
            navigate(`/contact/${callerId}`)
    }
    return(
        <div className="bg-container">
            <div className="calling-card">
                <div className="calling-details">
                    <h4 className="calling-heading">Calling...</h4>
                    <h3 className="calling-name">{contact.name} </h3>
                    <small className="calling-num">{contact.phNo}</small>
                </div>
                <button className="end-btn" onClick={handleEndCall}>End Call</button>
            </div>
            
        </div>
    )
}

export default Calling
