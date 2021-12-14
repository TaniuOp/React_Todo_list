import dotenv from 'dotenv'
import React, { Component } from "react";
import Wheathercard from "./Weathercard";
import './Weatherlist.css';
const axios = require('axios');
dotenv.config()


class Weatherlist extends Component {

  constructor(props) {
    super(props)

    this.city = React.createRef(); // crear la referencia

    this.state = {
      madridWeather: [],
      cityWeather: [],
      searchedCity: "",
      detailWeather: []
    }
  }

  // Mostramos la temperatura de Madrid al cargar el componente 
  async componentDidMount() {
    const city = "Madrid"
    const weatherAxios = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=9b7d802f737db11a4d282644c3b31a6a`);
    const data = weatherAxios.data.list[0].main.temp;
    // console.log(data.list[0].main.temp)
    this.setState({
      madridWeather: data
    })
  }

  // Funcion de mostrar la temperatura de Madrid (inicial) 
  paintWeather = () => {
    return this.state.madridWeather
  }

  paintCityWeather = () => {
    return this.state.cityWeather
  }

  // Funcion que maneja el formulario y actualiza el estado de la ciudad (searchedCity)
  handleSubmit = async (event) => {
    event.preventDefault();
    const searchedCity = this.city.current.value // hacemos uso del valor del campo por referencia
    this.setState({ searchedCity }) //actualizamos el valor de searchedCity 
    const weatherAxios = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=metric&appid=9b7d802f737db11a4d282644c3b31a6a`);
    const data = weatherAxios.data.list[0].main.temp;
    const detailData = weatherAxios.data.list;
    console.log(detailData)
    this.setState({
      cityWeather: data, 
      detailWeather: detailData
      // paintCityWeather(data)
    })
  }

  render() {
    return <div>
      <h1>Wheatherlist</h1>
      <p className="infoExtra">En esta vista hacemos la peticion a openweather y se mostrará por defecto el pronóstico extendido de Madrid "componentDidMount"</p>

      {/* Pintamos clima de Madrid al entrar */}
      <h3>Temperatura de Madrid: </h3>{this.paintWeather()} ºC

      <p>Busca el clima de otra ciudad</p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">Ciudad:</label><br />
        <input type="text" id="city" name="city" ref={this.city} /><br />
        <input type="submit"/>
      </form>

      <br />

      <h2>City Wheather list</h2>
        <p className="infoExtra">Temperatura de {this.state.city}</p> 
        {/* Me falta pintar la ciudad  */}
        {this.paintCityWeather()} ºC

      <br/>

      <h2>Wheathercard</h2>
        <p className="infoExtra"> Información meteorológica de las próximas 5 iteraciones (horario, temperatura, estado del tiempo)</p>
        <Wheathercard detailWeather={this.state.detailWeather}></Wheathercard>

    </div>;
  }
}

export default Weatherlist;