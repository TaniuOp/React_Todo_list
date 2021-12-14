import React, { Fragment } from 'react';

const Weathercard = ({ detailWeather }) => {
    return (
        <div>
            {
            detailWeather.map(cityWeather => 
              <Fragment key={cityWeather.dt_txt} >
                  <p>Humedad: {cityWeather.main.humidity} %</p>
                  <p>Temperatura mínima: {cityWeather.main.temp_min} ºC</p>
                  <p>Temperatura máxima:{cityWeather.main.temp_max} ºC</p>
                  <p>Cielo: {cityWeather.weather[0].description}</p>
                  <p>{cityWeather.dt_txt}</p>
                  <hr />
              </Fragment>
            )
            }
        </div>
    );
}

Weathercard.defaultProps = {
  detailWeather: []
  }

export default Weathercard;