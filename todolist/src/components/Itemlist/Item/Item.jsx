import React, { Component } from "react";


export class Item extends Component {

  render() {

    return (
      <div>
        {/* leo los parametros de Itemlist */}
        <p>Tarea: {this.props.name}</p>
        <p>Fecha: {this.props.date}</p>    
        <p>Responsable: {this.props.assignee}</p>   
        <button onClick={this.props.delete}>Borrar item</button>

      </div>
    )
  }
}

export default Item;
