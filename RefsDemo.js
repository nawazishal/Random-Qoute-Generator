import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.createList=this.createList.bind(this)
   
    }
    createList(items){
        return <li>{items.text}</li>
    }
    
    render() {
   
  
        return(
            <ul></ul>
        );
    
}
 }

export default RefsDemo
