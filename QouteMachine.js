import React, { useState,useEffect } from 'react';
import axios from 'axios'

export default function Qoutes() {
     const [qoute, setqoute] = useState({})
     const [id, setid] = useState(1)
     const [btnId,setbtnId]=useState(1)

     useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/todos/${btnId}`)
         .then(response => {
             setqoute(response.data)
         })
        .catch((error)=>{
            console.log(error)
        })
     },[btnId])
    const  hanldeinput=()=>{
      setbtnId(id)
     }
    
    return (
        <div>
            <input type="text" value={id} onChange={e => setid(e.target.value)} />
            <button onClick={hanldeinput}>fetch qoute</button>
            <h1>{qoute.title} </h1>
            <button className="tweet-qoute"  onClick={()=>{window.open("https://twitter.com/intent/tweet"); alert('successful')}}>Tweet Qoute</button>
        </div>
    )
}
