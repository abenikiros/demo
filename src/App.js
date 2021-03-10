import React, {Component} from 'react';
import axios from 'axios';


export default class App extends Component{
  
  
  handlesubmit=e=>{
    
    e.preventDefault();
    const data={
    email: this.email, password: this.password
    }
    const options={
      headers :{
        "Content-Type" : "application/json" ,
        "Current-Build" : "ios-17" ,
        "Cache-Control": "no-cache" ,
        "Accept" : "application/json",
        "Content-Language" : "en",
        "DeviceId" :"7_devel"

      }
    }
    axios.post('https://staging.soundfit.app/backoffice/api/auth/login',data,options)
    .then( res => {
    console.log(res); 
    })
    .catch( error => {
    console.log(error);
    });
  
  }
  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <input type="email" onChange={e=>this.email=e.target.value}></input>
        <input type="password" onChange={e=>this.password=e.target.value}></input>
        <button>logout</button>
      </form>
    )
  }
}
