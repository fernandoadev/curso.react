'use strict'

import React, { Component } from 'react'
//import Title from './title'
import Square from './square'
import Button from './button'
/* Componente usando classe do ES06*/
class App extends Component {
  render() {
    return (
      <div onClick={(e) => {
        alert('eae');
      }} className='container'>
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        <Button>Texto</Button>
      </div>
    )
  }
}

/* Componente usando createClass do react do ES05*/
// var App = React.createClass({
//   render: function () {
//     return <div>
//       <Title name="Fernando" lastName="de Almeida" />
//     </div>
//   }
// })

export default App
