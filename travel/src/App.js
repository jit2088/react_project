import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Component}  from "react"

class App extends Component{

    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:0,
            gender:"",
            destination:""
            
        }
    }

    render(){

        return(

            <main>
                <form>
                    <input 
                        name="firstName"
                        value = {this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder = "First Name" /><br/>
                    <input 
                        name="lastName" 
                        value = {this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder = "Last Name" /><br/>
                    <input 
                        name="age" 
                        value = {this.state.age} 
                        onChange={this.handleChange} p
                        laceholder = "Age" /><br/>

                    {}
                    <br/>
                    {}
                    <button>Submit</button>

                </form>
            </main>
        )
    }

}

export default App
