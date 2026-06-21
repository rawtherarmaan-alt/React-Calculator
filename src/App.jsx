import React,{Component} from "react";
import "./App.css"
import Calculator from "./Pages/Calculator";



export default class App extends Component{
    constructor(props){
      super(props)
    }
  render(){
    return(
      <div className="container">
        <div className="title">
         <h1>React-Calculator</h1>
         </div>
         <Calculator/>
      </div>
    )
  }
}