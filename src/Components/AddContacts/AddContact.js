import { Fragment, useState } from "react"
import './AddContact.css'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage(props){
    const {contacts,addContacts} = props
    
    const [name,setName] = useState("")
    const [phNo,setphNo] = useState("")
    const id = uuid()
    const navigate = useNavigate()

    const onChangeName = (event)=>{

        setName(event.target.value)

    }

    const onChangephNo = (event)=>{

        setphNo(event.target.value)

    }

    const onHandleSubmit = (event)=>{
       event.preventDefault()
       const newContactsList = [...contacts]
       newContactsList.push({name:name, phNo:phNo, id:id, add:true})
       localStorage.setItem('allContacts',JSON.stringify(newContactsList))
       addContacts(newContactsList)
       
       navigate('/contacts')
       
    }
    
  
    return (
        <Fragment>
            <div className="bg-container">
                <h1 className="main-heading">Contacts Manager</h1>
                
                <div className="main-card">
                    <div className="c-buttons">
                        <Link to={'/contacts'}>
                                <button className="c-button">Contacts</button>
                        </Link> <br/>
                        
                        <Link to={'/callLog'}>
                                <button className="c-button">Call log</button><br/>
                        </Link>
                     </div>

                    <div className="user-input">
                        <form className="myForm" onSubmit={onHandleSubmit} >
                            <input required placeholder="Name" name="name" onChange={onChangeName}
                            ></input>  

                            <input required placeholder="Phone Number" name="phNo" onChange={onChangephNo}
                            ></input>  

                           
                             <button className="c-button"  type="submit" >Save</button>
                        </form>
                        
                    </div>
                    
                   

                </div>
                </div>
        </Fragment>


    )
}

export default MainPage