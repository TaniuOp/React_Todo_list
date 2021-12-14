import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return <div>
      <h1>COMPONENTE HOME </h1>
      <h2>Bienvenido</h2>
      <a href="../itemlist" id="showList">Ver lista</a>
      <br />
      <br />
      <img src="https://miro.medium.com/max/1400/1*9MECPZ5wUPS08IWMcqJKiA.png" alt="" id="welcomeImg"/>

    </div>;
  }
}

export default Home;
