import React,{useState} from 'react'
import Logo from '../assets/2.png'
import axios from 'axios'
import { useHistory } from 'react-router';
export default function Login() {
    let history = useHistory();
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    
    const submitHandler=()=>{
        const data={
            name:name,
            password:password
        }
        axios.post('https://task-manager-tdcx.herokuapp.com/login',data)
        .then(res=>{
            history.push('/dashboard')
        })
    }
    return (
        <div>
            <img src={Logo} style={{width:"300px",height:"180px"}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <input type="text" placeholder="Enter Name" onChange={nameHandler}/>
                <input type="type" placeholder="password" onChange={passwordHandler}/>
                <button onClick={submitHandler}>Login</button>
            </div>
        </div>
    )
}
