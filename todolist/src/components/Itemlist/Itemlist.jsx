import React, { Component } from "react";
import Item from "./Item"

export class Itemlist extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      lastTaskAdded: {},
      allTasksList:[]
    }
  }

  // creamos Items 
  createTask = (name, date, assignee) => {
      const newTask = {name, date, assignee}
      this.setState({lastTaskAdded: newTask})
      this.setState ({allTasksList:[...this.state.allTasksList, newTask]})
  }


  // hacemos funcion para prevenir comportamiento por defecto, obtenemos los values de los campos y llamamos la funcion de crear item con los argumentos obtenidos 
  handleSubmit = (event) => {
    event.preventDefault();
      const name = event.target.name.value
      const date = event.target.date.value
      const assignee = event.target.assignee.value
    this.createTask (name, date, assignee)
  }
  

  render() {

    return (
    <div>
      <h1>Componente - Itemlist</h1>
      <p>En esta vista tendremos acceso al To do list: </p>
      <p> - Añadir tareas a una lista a través de un input de texto.</p>
      <p>- Borrar tareas individualmente. </p>
      <p>- Borrar todas las tareas.</p>
      <br/>
      <hr/>
      <h4>Crear una nueva tarea:</h4>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Nombre de la tarea:</label><br/>
            <input type="text" id="name" name="name" ref={this.name}/><br />
            
            <label htmlFor="date">Fecha:</label><br/>
            <input type="date" id="date" name="date"/><br/>
            
            <label htmlFor="assignee">Responsable:</label><br/>
            <input type="text" id="assignee" name="assignee"/><br/>
            
            <input type="submit"/>
        </form> 

      <h4>Listado de "To do":</h4>


      
      
    </div>
    )
  }
}

export default Itemlist;
