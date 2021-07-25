import React,{useState} from 'react'
import Logo from '../assets/2.png'
import axios from 'axios'
export default function Mini() {
    const [date,setDate]=useState('')
    
    const [veh,setVeh]=useState('')
    const [invoice,setInvoice]=useState('')
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [qty,setQty]=useState('')
    const [points,setPoints]=useState('')
    const [amount,setAmount]=useState('')
    const ondateHandler=(e)=>{
        setDate(e.target.value)
    }
    const onamountHandler=(e)=>{
        setAmount(e.target.value)
    }
   
    const onvehHandler=(e)=>{
        setVeh(e.target.value)
    }
    const oninvoiceHandler=(e)=>{
        setInvoice(e.target.value)
    }
    const onfromHandler=(e)=>{
        setFrom(e.target.value)
    }
    const ontoHandler=(e)=>{
        setTo(e.target.value)
    }
    const onqtyHandler=(e)=>{
        setQty(e.target.value)
    }
    const onpointsHandler=(e)=>{
        setPoints(e.target.value)
    }
    const submitHandlerA=(e)=>{
        e.preventDefault();
       const datas={
          date:date,
          vehicle:veh,
          invoice:invoice,
          from:from,
          to:to,
          qty:qty,
          point:points,
          amount:amount

      }
      axios.post('https://task-manager-tdcx.herokuapp.com/mini',datas)
      .then(res=>{
          alert('succesfull')
          console.log(res)
          setAmount('')
          setDate('')
          setFrom('')
          setInvoice('')
         
          setQty('')
         
          setTo('')
          setPoints('')
          setVeh('')
      })
      .catch(err=>{
          alert('failed')
      })
    }
    return (
        <div>
            <img src={Logo}  style={{width:"300px",height:"180px"}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <input type="date" placeholder="date" value={date} onChange={ondateHandler}/>
             
                <input type="text" placeholder="vehicle No" value={veh} onChange={onvehHandler}/>
                <input type="text" placeholder="Invoice no" value={invoice} onChange={oninvoiceHandler}/>
                <input type="text" placeholder="from address" value={from} onChange={onfromHandler}/>
                <input type="text"  placeholder="to address" value={to} onChange={ontoHandler}/>
                <input type="number" placeholder="quantity" value={qty} onChange={onqtyHandler}/>
                <input type="number" placeholder="points" value={points} onChange={onpointsHandler}/>
                <input type="number" placeholder="amount" value={amount} onChange={onamountHandler}/>
                <button onClick={submitHandlerA}>Submit</button>
            </div>
        </div>
    )
}