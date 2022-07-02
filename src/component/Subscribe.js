import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Subscribe.css'
import { db } from "../firebase_Config";
import {collection, getDocs, addDoc } from "firebase/firestore";



const Subscribe = () => {
    const [formdata, setFormdata] = useState({fName:"", tel:"", email:"", question:"",})
    const [message, setMessage] = useState({error: false, msg: ""})
    const [focus, setFocus] = useState(false)

  const navigate = useNavigate()

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!formdata){
        setMessage({error:false, msg: "All fields are mandatory!"});
        return;
      }
     await addDoc(usersCollectionRef, {formdata})
  
        alert('Subscribtion successful')
        navigate("/webinar", {replace: true});
        setFormdata(formdata);
  }

  const handleFocus =(e)=>{
    setFocus(true);
  };

  const usersCollectionRef = collection(db, 'Subscribe')
  useEffect(() =>{
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    };
      getUsers()

  }, []);
  return (
    <>

    <div className="form">
        <span>{message.msg}</span>
    <form onSubmit={handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Subscribe to the coming event</div>
      <div className="input-container ic1">
        <input type="text" name="fNmae" placeholder='' value={formdata.fName} onChange={(e)=>{setFormdata({...formdata,fName:e.target.value})}} required className='input' pattern='^[A-Za-z]{3,30} [A-Za-z]{3,30}' onBlur={handleFocus} focus={focus.toString()}/>
        <div className="cut"></div>
        <label className="placeholder">Full Name</label>
        <span>this field is required</span>
      </div>
      <div className="input-container ic2">
        <input id="tel" className="input" placeholder=" " type="tel" name="tel"  value={formdata.tel} onChange={(e)=>{setFormdata({...formdata, tel:e.target.value})}} pattern='[0-9]{4} [0-9]{3} [0-9]{4}' onBlur={handleFocus} focus={focus.toString()} maxLength='13' />
        <div className="cut"></div>
        <label className="placeholder">Phone</label>
        <span>input a valid phone number</span>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="email" placeholder=" " name="email"  value={formdata.email} onChange={(e)=>{setFormdata({...formdata,email:e.target.value})}} required onBlur={handleFocus} focus={focus.toString()}/>
        <div className="cut cut-short"></div>
        <label className="placeholder">Email</label>
        <span>input a valid email</span>
      </div>
      <div className="input-container ic2">
        <input id="tech" className="input" type="text" placeholder=" " name="tech"  value={formdata.question} onChange={(e)=>{setFormdata({...formdata, question:e.target.value})}} required/>
        <div className="cut cut-short"></div>
        <label className="placeholder">What tech product do you like the most? </label>
      </div>
      <button type="text" className="submit">submit</button>
    </form>
    </div>

    </>
  )
}

export default Subscribe