import React, {Component} from "react"



function FormComponent (props){

        return(
        <main>
                <form>
                    <input 
                        name="firstName"
                        value = {props.data.firstName} 
                        onChange={props.handleChange} 
                        placeholder = "First Name: " /><br/>
                    <input 
                        name="lastName" 
                        value = {props.data.lastName} 
                        onChange={props.handleChange} 
                        placeholder = "Last Name: " /><br/>
                    <input 
                        name="age" 
                        value = {props.data.age} 
                        onChange={props.handleChange} 
                        placeholder = "Age: " /><br/>
                    
                    <input 
                        name="destination" 
                        value = {props.data.destination} 
                        onChange={props.handleChange} 
                        placeholder = "Destination: " /><br/><br/>

                    <label>
                      <input 
                        type="radio"
                        name ="gender"
                        value="male"
                        checked ={props.data.gender === "male"}
                        onChange = {props.handleChange}/>Male
                      <br/>
                      <input 
                        type="radio"
                        name ="gender"
                        value="female"
                        checked ={props.data.gender === "female"}
                        onChange = {props.handleChange}/> Female
                      
                    </label>

                    <br/>
                    <select 
                        value = {props.data.destination} 
                        name="destination" 
                        onChange = {props.handleChange}>
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
                      onChange = {props.handleChange}
                      checked = {props.data.isVegan} 
                      /> Vegan
                    <br/>
                    <input  
                      type = "checkbox"
                      name = "isKosher"
                      onChange = {props.handleChange}
                      checked = {props.data.iisKosher}
                      /> Kosher
                    <br/>
                    <input  
                      type = "checkbox"
                      name = "isLocatoseFree"
                      onChange = {props.handleChange}
                      checked = {props.data.isLocatoseFree}
                      /> Locatose Free
                  </label>
                  <br/>
                  <br/>
                  <button>Submit</button>

                </form>
                
                <br/>
                <hr/>
                <h2>Entered information: </h2>
                <p>Your name: {props.data.firstName}{props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>Your dietary restrictions : 
                  <br/>
                  Kosher: {props.data.isKosher ? "Yes" : "No"}
                  <br/>
                  LocatoseFree: {props.data.isLocatoseFree ? "Yes" : "No"}
                  <br/>
                  Vegan: {props.data.isVegan ? "Yes" : "No"}</p>


            </main>
        )

}

export default FormComponent