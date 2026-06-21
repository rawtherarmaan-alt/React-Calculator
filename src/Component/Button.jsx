import React,{Component} from "react";

export default class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="btn" onClick={()=> this.props.Calc(this.props.title)}>
                {this.props.title}
            </div>
        )
    }
}