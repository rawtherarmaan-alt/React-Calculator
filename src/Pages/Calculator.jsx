import React,{Component} from "react";
import Display  from "../Component/Display";
import Keypad from "../Component/Keypad";

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.state={
            inp:"",
            out:""
        }
       this.Calc = this.Calc.bind(this);//method binding 
    }

    Calc(val){
        console.log(`val=`,val)
        if(val === "CE"){
            this.setState({
                inp:"",
                out:""
            })
        }else if(val === "C"){
            this.setState({
                inp:""
            })
        }else if(val === "BS"){
            this.setState({
                inp:this.state.inp.substring(0,this.state.inp.length-1)
            })

        }else if(val === "1/x"){
            this.setState({
                out:1/this.state.inp
            })

        }else if(val == "sqr"){
            this.setState({
                out:Math.pow(this.state.inp,2)
            })

        }else if(val === "sqrt"){
            this.setState({
                out:Math.sqrt(this.state.inp)
            })

        }else if(val === "+/-"){
            this.setState({
                out:Math.abs(this.state.inp)
            })
            
        }else if (val === "="){
            this.setState({
                out:eval(this.state.inp)
            })
        }else{
            this.setState({
                inp:this.state.inp+val
            })
        }

 }
    render(){
        return(
            <section className="cal-container">
                <Display inp= {this.state.inp} out={this.state.out}/>
                <Keypad Calc={this.Calc}/>
            </section>
        )
    }
}