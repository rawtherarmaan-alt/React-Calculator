import React,{Component} from "react";

export default class Display extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className="display">
               <span className="out">{this.props.out || 0}</span>
               <span className="inp">{this.props.inp || 0}</span>
            </section>
        )
    }

}