import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


function App(){


    //const productsComponents = vschoolProducts.map(item=> <Product key= {item.id} name= {item.name} price = {item.price} description = {item.description}/>)
    const todosItems = todosData.map(item => <TodoItem key = {item.id} item ={item}/>) 
    

    


    return (
        <div>
            {todosItems}
        </div>
        
    )

}

export default App