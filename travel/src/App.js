import React from 'react'
import './App.css'
import {Component}  from "react"

class App extends Component{

    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:""
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    }
    render(){

        return(

            <main>
                <form>
                    <input 
                        name="firstName"
                        value = {this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder = "First Name: " /><br/>
                    <input 
                        name="lastName" 
                        value = {this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder = "Last Name: " /><br/>
                    <input 
                        name="age" 
                        value = {this.state.age} 
                        onChange={this.handleChange} 
                        placeholder = "Age: " /><br/>
                    
                    <input 
                        name="gender" 
                        value = {this.state.gender} 
                        onChange={this.handleChange} 
                        placeholder = "Gender: " /><br/>
                    
                    <input 
                        name="destination" 
                        value = {this.state.destination} 
                        onChange={this.handleChange} 
                        placeholder = "Destination: " /><br/>

                    {}
                    <br/>
                    {}
                    <button>Submit</button>

                </form>
                <hr/>
                <br/>
                <h2>Entered information: </h2>
                <p>Your name: {this.state.firstName}{this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>

            </main>
        )
    }

}

export default App
