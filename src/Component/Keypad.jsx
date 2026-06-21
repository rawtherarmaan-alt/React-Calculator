import React,{Component} from "react";
import Button from "./Button";

export default class Keypad extends Component{
    constructor(props){
        super(props)
        this.state={
            keys:["%","CE","C","BS","1/x","sqr","sqrt","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="]
        }
    }
    render(){
        return(
            <div className="keypad">
               {
                this.state.keys.map((val,index)=>{
                    return(
                        <Button key={index} title={val} Calc={this.props.Calc}/>
                    )
                })
               }
            </div>
        )
    }

}