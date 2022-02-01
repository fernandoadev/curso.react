'use strict'

import React, { Component } from 'react'
//import Title from './title'
import Square from './square'

/* Componente usando classe do ES06*/
class App extends Component {
  render() {
    return (
      <div>
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />
        ))}
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
