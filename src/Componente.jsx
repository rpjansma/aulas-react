import React, { Component } from 'react'

//Criação de classe com nome Componente, do tipo Component, e exporta-la.
export default class Componente extends Component {

  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>

        <h1> Primeiro programinha</h1>

        <h2>Nome: {this.props.nome}</h2>

        <h2>Idade: {this.props.idade}</h2>

        <h2>Cidade: {this.props.cidade}</h2>
      </div>
    )
  }
}