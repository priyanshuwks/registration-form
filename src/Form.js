import React, { useEffect, useState } from 'react'
import './form.css'

function Form() {
    const data = {name: "", email: "", password: ""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        console.log("registered")
    },[flag]
    )
    function handleData(e){
        setInputData({...inputData, [e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password)
            alert("All fields are mandatory")
        else
            setFlag(true)
    }
  return (
    <>
        <div className="success-div">
        <pre>{(flag)? <h2 className='success-prompt'>Hello {inputData.name}, You have registered successfully!</h2>: ""}
        </pre>
        </div>
        <div className="container">
          <div className="heading"><h1>Registration Form</h1></div>
          <div onSubmit={handleSubmit}>
            <form action="" >
              <div className="inputfields">
                <input type="text" placeholder="enter full name" name="name" onChange={handleData}/>
              </div>
              <div className="inputfields">
                <input type="email" placeholder="enter your email" name="email" onChange={handleData}/>
              </div>
              <div className="inputfields">
                <input type="password" placeholder="enter your password" name="password" onChange={handleData}/>
              </div>
              <div className="button">
              <button type="submit" onSubmit={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Form

