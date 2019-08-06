   
import React, { useState,useEffect} from 'react';
import axios from 'axios'

export default function Qoutes() {
     const [qoute, setqoute] = useState([])
     const [author, setauthor] = useState('')
     
 useEffect(()=>{
     document.title= qoute
 })
 
    const getQoute= (()=>{
         axios.get("https://api.quotable.io/random")
         .then(response => {
             setqoute(response.data.content)
             setauthor(response.data.author)
         })
        .catch((error)=>{
            console.log(error)
        })
     })
    
    return (
        <React.Fragment>
            <h1>Qoute Generator</h1>
            <button onClick={getQoute}>fetch qoute</button>
            <textarea value={qoute}/>
            <p>Qoute By : {author}</p>
            <button className="tweet-qoute"  onClick={()=>{window.open("https://twitter.com/intent/tweet"); alert('successful')}}>Tweet Qoute</button>
        </React.Fragment>
    )
}
