import React, { Component } from "react";
import Item from "./Item"
import jsonData from "../../jsonData"
import './Itemlist.css'

export class Itemlist extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      lastTaskAdded: {}, //objeto con lo ultimo añadido 
      allTasksList:[],  //donde iremos guardando el listado de tareas 
      task: ""
    }
  }

  componentDidMount() {
    this.setState({allTasksList:jsonData})
  }
  

  // Funcion para crear Items 
  createTask = (name,date,assignee) => {
    const newTask = {name,date,assignee}
    this.setState ({lastTaskAdded:newTask}) //setState Modifica el Estado
    this.setState ({allTasksList:[...this.state.allTasksList,newTask]}) //Aqui agrego a la lista de productos todo lo que habia [...,+ los nuevos pruductos]
    alert(`Se ha creado ${name}, para el  ${date}`)
}

  deleteAllProducts = () => {
    alert("Se han borrado todas las tareas")
    this.setState({allTasksList:[]})     //Vamos a vaciar el array
  }
  
  deleteItem = (i) => {
    const tasks = this.state.allTasksList.filter((task,j)=>j!==i)
    this.setState({allTasksList:tasks})
  }

  paintTask (){
    return this.state.allTasksList.map((product,i)=> <Item info={product} delete ={()=>this.deleteItem(i)} key = {i}/>)
  }

  handleChange = event => {
    this.setState({task: event.target.value})
  }

  // hacemos funcion para prevenir comportamiento por defecto, obtenemos los values de los campos y llamamos la funcion de crear item con los argumentos obtenidos 
  handleSubmit = (event) => {
    event.preventDefault();
      const name =  event.target.name.value
      const date = event.target.date.value
      const assignee = event.target.assignee.value
      //Llamo a la funcion despues de leer los campos internos 
      this.createTask (name,date,assignee)
        event.target.name.value = ""
        event.target.date.value = ""
        event.target.assignee.value = ""
    }
  

  render() {

    const name =  this.state.lastTaskAdded.name

    return (
    <div>
      <h1>Componente - Itemlist</h1>
      <p className="infoExtra">En esta vista tendremos acceso al To do list. Se podrá: </p>
      <p className="infoExtra"> - Añadir tareas a una lista a través de un input de texto.</p>
      <p className="infoExtra"> - Borrar tareas individualmente. </p>
      <p className="infoExtra"> - Borrar todas las tareas.</p>
      <br/>
      <hr/>
      <h4>Crear una nueva tarea:</h4>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Nombre de la tarea:</label><br/>
            <input type="text" id="name" name="name" onChange={this.handleChange}/><br />
            
            <label htmlFor="date">Fecha:</label><br/>
            <input type="date" id="date" name="date"/><br/>
            
            <label htmlFor="assignee">Responsable:</label><br/>
            <input type="text" id="assignee" name="assignee"/><br/> <br />

            
            { this.state.task ? <input type="submit" value="Añadir Tarea"/> : null }
        </form> 

        <br />

      <h4>Listado de "To do":</h4>
        {this.paintTask()}

        <br />
      <h5>Ultima tarea creada :</h5>
        <p>{name}</p>

        <br />
      <button onClick={this.deleteAllProducts}>Borrar Todo</button>
    </div>
    )
  }
}

export default Itemlist;
