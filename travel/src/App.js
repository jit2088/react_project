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
            destination:"",
            isVegan: false,
            isKosher:false,
            isLocatoseFree: false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
          this.setState({
            [name]:checked
          })
          :
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
                        name="destination" 
                        value = {this.state.destination} 
                        onChange={this.handleChange} 
                        placeholder = "Destination: " /><br/><br/>

                    <label>
                      <input 
                        type="radio"
                        name ="gender"
                        value="male"
                        checked ={this.state.gender === "male"}
                        onChange = {this.handleChange}/>Male
                      <br/>
                      <input 
                        type="radio"
                        name ="gender"
                        value="female"
                        checked ={this.state.gender === "female"}
                        onChange = {this.handleChange}/> Female
                      
                    </label>

                    <br/>
                    <select 
                        value = {this.state.destination} 
                        name="destination" 
                        onChange = {this.handleChange}>
                        <option value = "">--- Please Choose a destination ---</option>
                        <option value = "sermany">S</option>
                        <option value = "hermany">H</option>
                        <option value = "eermany">E</option>
                        
                    </select>

                  <br/>
                  <label>
                    <input  
                      type = "checkbox"
                      name = "isVegan"
                      onChange = {this.handleChange}
                      checked = {this.state.isVegan} 
                      /> Vegan
                    <br/>
                    <input  
                      type = "checkbox"
                      name = "isKosher"
                      onChange = {this.handleChange}
                      checked = {this.state.iisKosher}
                      /> Kosher
                    <br/>
                    <input  
                      type = "checkbox"
                      name = "isLocatoseFree"
                      onChange = {this.handleChange}
                      checked = {this.state.isLocatoseFree}
                      /> Locatose Free
                  </label>
                  <br/>
                  <br/>
                  <button>Submit</button>

                </form>
                
                <br/>
                <hr/>
                <h2>Entered information: </h2>
                <p>Your name: {this.state.firstName}{this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions : 
                  <br/>
                  Kosher: {this.state.isKosher ? "Yes" : "No"}
                  <br/>
                  LocatoseFree: {this.state.isLocatoseFree ? "Yes" : "No"}
                  <br/>
                  Vegan: {this.state.isVegan ? "Yes" : "No"}</p>


            </main>
        )
    }

}

export default App
