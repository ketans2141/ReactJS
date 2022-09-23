import React,{Component} from "react";

export class CountClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    incrementVal=(stepValue)=>{
        this.setState({
            count:this.state.count + stepValue,
        })
    }
    render(){
        return(
            <>
                <p>count - {this.state.count}</p>
                <button onClick={()=>this.incrementVal(2)}>Increment</button>
            </>
        )
    }
}