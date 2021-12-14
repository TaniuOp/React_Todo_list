import React, { Component } from "react";
import './Item.css'

class Item extends Component {
 //reconst
 constructor(props) {
  super(props)
  this.state = {
    assignee : this.props.info.assignee || "Promo FullStack Sep 2021"
  }
}
  render() {

  const {name,date}= this.props.info

      return (
          <div>
        <ul>
          <li>Tarea: {name} </li>
          <li>Fecha Tarea: {date} </li>
          <li>Responsable: {this.state.assignee} </li>
        </ul>

        <button onClick={this.props.delete}>Borrar</button>
          </div>
      )
  }
}



export default Item;