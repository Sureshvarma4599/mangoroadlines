import React,{useState} from 'react'
import Logo from '../assets/2.png'
import axios from 'axios'
export default function Third() {
    const [date,setDate]=useState('')
    const [transporter,setTransporter]=useState('')
    const [lr,setLr]=useState('')
    const [veh,setVeh]=useState('')
    const [invoice,setInvoice]=useState('')
    const [from,setFrom]=useState('')
    const[driver,setDriver]=useState('')
    const [to,setTo]=useState('')
    const [qty,setQty]=useState('')
    const [points,setPoints]=useState('')
    const [amount,setAmount]=useState('')
    const dateHandler=(e)=>{
        setDate(e.target.value)
    }
    const amountHandler=(e)=>{
        setAmount(e.target.value)
    }
    const transportHandler=(e)=>{
        setTransporter(e.target.value)
    }
    const lrHandler=(e)=>{
        setLr(e.target.value)
    }
    const vehHandler=(e)=>{
        setVeh(e.target.value)
    }
    const invoiceHandler=(e)=>{
        setInvoice(e.target.value)
    }
    const fromHandler=(e)=>{
        setFrom(e.target.value)
    }
    const driverHandler=(e)=>{
        setDriver(e.target.value)
    }
    const toHandler=(e)=>{
        setTo(e.target.value)
    }
    const qtyHandler=(e)=>{
        setQty(e.target.value)
    }
    const pointsHandler=(e)=>{
        setPoints(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
      const data={
          date:date,
          transporter:transporter,
          lr:lr,
          vehicle:veh,
          invoice:invoice,
          from:from,
          driver:driver,
          to:to,
          qty:qty,
          point:points,
          amount:amount

      }
      axios.post('https://task-manager-tdcx.herokuapp.com/third',data)
      .then(res=>{
          alert('successfull')
          console.log(res)
          setAmount('')
          setDate('')
          setFrom('')
          setInvoice('')
          setLr('')
          setQty('')
          setTransporter('')
          setDriver('')
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
            <img src={Logo} style={{width:"300px",height:"180px"}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <input type="date" placeholder="date" value={date} onChange={dateHandler}/>
                <input type="text" placeholder="Transport" value={transporter} onChange={transportHandler}/>
                <input type="number" placeholder="LR NO" value={lr} onChange={lrHandler}/>
                <input type="text" placeholder="vehicle No" value={veh} onChange={vehHandler}/>
                <input type="text" placeholder="Invoice no" value={invoice} onChange={invoiceHandler}/>
                <input type="text" placeholder="from address" value={from} onChange={fromHandler}/>
                <input type="text" placeholder="Driver phone" value={driver} onChange={driverHandler}/>
                <input type="text"  placeholder="to address" value={to} onChange={toHandler}/>
                <input type="number" placeholder="quantity" value={qty} onChange={qtyHandler}/>
                <input type="number" placeholder="points" value={points} onChange={pointsHandler}/>
                <input type="number" placeholder="amount" value={amount} onChange={amountHandler}/>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}
