import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return <nav>
      <ul>
        {/* Creamos una lista de navegacion y le indicamos a donde enruta */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/itemlist">ToDo</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        {/* Link to sustituye a Href */}
      </ul>
    </nav>;
  }
}

export default Nav;