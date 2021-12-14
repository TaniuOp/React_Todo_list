# React_Todo_list
Ejercicio Clase 36. Formulario para crear una lista "To do" 

Clase: https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_sept21/blob/main/teoria/react/clase35.md 

Ejercicio: https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_sept21/blob/main/teoria/react/clase36.md

Crea una TODO list que contenga lo siguiente:

- Un formulario con input + botón
- Un componente List que recorra listas de items
- Un componente Item o Card que contenga cada TO DO
- Botón CLEAR para borrar todas las tareas
- Botón BORRAR, asociado a cada tarea, para poder borrar de manera independiente
- Botón para hacer RESET de las tareas
- Dar estilo CSS a los componentes con lo visto en clase para practicar
- Flujo de la aplicación:

Nada más empezar tendremos un input y un botón. El botón tendrá el texto ADD
Si hemos escrito algo en el input y hacemos click sobre el botón ADD, se añadirá un item debajo del input.
Cuando un item sea añadido, se borrará inmediatamente lo que habíamos escrito en el input.
Se debe hacer una precarga de tareas de un JSON de datos
El botón de RESET mostrará de nuevo sólo las tareas obtenidas de la precarga de datos

TIP: usad el paquete de NPM UUID para manejar las keys de los diferentes elementos de la lista.


Componentes: 
- *HEADER (NAV)
- *MAIN 
    - **HOME (Welcome) 
    - **ITEMLIST (FORM con un input + boton "ADD")
        - ***ITEM 
        - ***ITEM  
        - ***...
    - **WEATHER (Api de clima)
- *FOOTER  


1-- He creado la carpeta bacia con todoreact 2-- Con la terminal he aplicado para la creacion del proyecyo base 3-- Ahora instalo el siguiente modulo para poder crear de una los componentes/carpetas de mi proyecto: <npm install --save-dev create-react-component-folder> 4-- Debo de estar dentro de la carperta SRC/Components que es la estatica del proyecto que me crea el comando paso <2> 5-- Ahora le doy la estructura de las carpetas/componentes de mi proyecto : <npx crcf Footer Header Nav Main Item Itemlist -j> 6-- Ahora me voy a App.js y importo los modulos de los componentes creados Footer/Header/Item/Itemlist/Nav <import Footer from './components/Footer/Footer'; import Header from './components/Header/Header'; import Main from './components/Main/Main'; import Nav from './components/Nav/Nav'; import Item from './components/Item/Item'; import Itemlist from './components/Itemlist/Itemlist';> 7-- Ahora instalo el paquete npm i react-router-dom para poder rutear las rutas y lo importo en App.js <import {BrowserRouter, Router, Switch } from 'react-router-dom'> 8-- Ahora invoco las rutas en App.js de la siguinte manera

Nota : Que Main a su vez pintara todo lo que tiene linkado en su .jsx Nota1: Defino la estructura de mi proyecto

9--Ahora como el ejercicio indica creo Home y wheater con <npx crcf Weather Home -j> 10--Ahora me voy a Nav e importo Link: <import { Link } from "react-router-dom";> 11--En nav.jsx linko mis rutas internas 12--En main realizo los ruteos de : <Route path="/" element={} exact /> <Route path="/itemlist" element={} /> <Route path="/weather" element={} /> 13-Me voy a Header e importo Nav y lo aplico dentro de la estructura header
< import React, { Component } from 'react' import Nav from '../Nav'

export class Header extends Component { render() { return (

) } }
export default Header