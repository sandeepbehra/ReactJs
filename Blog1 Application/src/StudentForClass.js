import React,{Component} from "react";



class StudentForClass extends Component {
    
    render(){
        return(
    <div>
    <button onClick={this.props.data}>Click</button>
    </div>)
    }
}

export default StudentForClass