'use strict'

import React from 'react'

/* Componente usando função pura*/
const Title = (props) => (
  <h1>Olá {`${props.name} ${props.lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}
// const Title = React.createClass({
//   //getDefaultProps => propriedades padrão caso não passe no import desse componente
//   getDefaultProps: function () {
//     return {
//       name: "Desconhecido",
//       lastName: "Sem sobrenome"
//     }
//   },
//   render: function () {
//     return (
//       <h1>Ola {this.props.name + ' ' + this.props.lastName}</h1>
//     )
//   }
// })

export default Title
