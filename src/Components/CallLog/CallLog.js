import { useNavigate } from 'react-router-dom'
import './CallLog.css'
import { Fragment } from 'react'

function CallLog(props){
    const {CallLog, setCallLog} = props
    const navigate = useNavigate()
    let savedCallHistory = JSON.parse(localStorage.getItem('callHistory'))

    return(
        <div className='calllog-container'>
            <nav className='nav-container'>
                    <h5 className='nav-text back' onClick={()=>navigate('/contacts')}>Back</h5>
                    <h5 className='nav-text back' onClick={()=>{localStorage.removeItem('callHistory')
                    setCallLog([])}}
                            >Clear Call History</h5>
                    {/* <h3 className='nav-text'>Call Log</h3> */}
                    
                </nav>
            <div className='calllog-list-container'>
                
                <div>
                    {savedCallHistory ? savedCallHistory.map((c)=>{
                        return(
                            <div key={c.id}>
                                <h5>{c.name}</h5>
                                <p>{c.phNo}</p>
                            </div>
                        )
                        
                    }) : <h4>No recent activity</h4>}
                </div>
            </div>
        </div>
    )
}

export default CallLog
