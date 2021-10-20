import React, { Component } from "react";
class ListaDeCategorias extends React.Component {
  _handleEventoInput(event) {
    if (event.key == "Enter") {
      console.log("abuble");
    }
  }
  render() {
    return (
      <section>
        <ul>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
        </ul>
        <input
          type="text"
          placeholder="adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}
export default ListaDeCategorias;
