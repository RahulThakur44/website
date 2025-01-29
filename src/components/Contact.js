import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {

    const[user,setUser]=useState(
        {
            Name:'',email:'',subject:'',Message:''   
        }
    )
        let values,names
    const data=(e)=>
    {
            values = e.target.value
            names =e.target.name 
            setUser({...user, [names]: values})   
    }

    const send =async(e)=>
    {
        const {Name,email,subject,Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name,email,subject,Message
            })
        }

        const send = await fetch(
            'https://react-ecommerce-contact-3a026-default-rtdb.firebaseio.com/Message.json' , option)
           
            if(send){
                alert("Message Sent")
            }
            else
            {
                alert("Error Occured Message sent Failed")
            }

    }

  return (
    <>
      <div className="contact">
        <div className="container">
            <div className='form'>
                <h2>#contact us</h2>
                <form method='POST'>
                    <div className="box">
                        <div className="lable">
                            <h4>Name</h4>
                        </div>
                        <div className="input">
                            <input type="text"  placeholder='Name' value={user.Name} name='Name' onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>E-mail</h4>
                        </div>
                        <div className="input">
                            <input type="email"  placeholder='email' value={user.email} name='email' onChange={data}/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Subject</h4>
                        </div>
                        <div className="input">
                            <input type="text"  placeholder='subject' value={user.subject} name='subject' onChange={data}/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Message</h4>
                        </div>
                        <div className="input">
                            <textarea placeholder='message' value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={send}>Send</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
