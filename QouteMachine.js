import React, { Component } from 'react'
import Random from 'lodash'
import RefsDemo from './RefsDemo';

export class QouteMachine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             qoutes : ['Bruce','Diana','Clarke']
        }
       
    }

 
    componentDidMount() {
        fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
        .then(result => result.json())
        .then(qoutes=>{
            this.setState({
                qoutes:qoutes
            })
        })
           
    }

    tweetQoute= ()=>{
        window.open("https://twitter.com/intent/tweet");
        alert("Success!")
    }
createList(items){
    return <li>{items.text}</li>
}

    render() {
      let result= this.state.qoutes
      console.log(result)
        return (
            <div>
                <div>
                   <form className="qoute-box">
                     <h1 className="text">{typeof this.state.qoute}</h1>
                     <p className="author">Author</p>
                     <button className="new-qoute"  onClick={this.get}>New Qoute</button>
                     <button className="tweet-qoute" onClick={this.tweetQoute}>Tweet Qoute</button>
                   </form>

                </div> 
                <RefsDemo list={this.state.qoutes}   />
            </div>
        )
    }
}

export default QouteMachine
