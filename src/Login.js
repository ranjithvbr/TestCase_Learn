import React from "react";


export default class Login extends React.Component{

    state={
        username:"",
        password:"",
        showvalue:false
    }

    submit=()=>{
        this.setState({
            showvalue:true
        })
    }

    updatevalue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    render(){
        return(
            <>
            <input type="text" value={this.state.username} name={"username"} onChange={this.updatevalue}/>
            <input type="password" value={this.state.password} name={"password"} onChange={this.updatevalue}/>
            <button onClick={this.submit}>Login</button>
            {
            this.state.showvalue && 
            <>
            <div>
                <b>username:</b>{this.state.username}
            </div>
            <div>
                <b>password:</b>{this.state.password}
            </div>
            </>
            }
            </>
        )
    }
}