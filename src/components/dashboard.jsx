import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/2.png'
export default function Dashboard() {
    
    return (
        <div>
            <img src={Logo} style={{width:"300px",height:"180px"}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Link to='/mini' style={{color:"white",textDecoration:"none"}}><button>Local</button></Link>
            <Link to='/mango-roadlines' style={{color:"white",textDecoration:"none"}}> <button >Mango Roadlines</button></Link>
                <Link to='/third' style={{color:"white",textDecoration:"none"}}><button >Third party</button></Link>
            </div>
        </div>
    )
}
