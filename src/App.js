import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import ArrayDeNotas from "./dados/Notas";
import Categorias from "./dados/Categorias";
class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  render() {
    return (
      <section className="conteudo">

        <FormularioCadastro
        categorias={this.categorias.categorias}        
        criarNota={this.notas.adicionarNota}/>

        <main className="conteudo-principal">
          
          <ListaDeCategorias
          
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}/>

          <ListaDeNotas
            notas={this.notas.apagarNota}
            apagarNota={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}
  
//new ListaDeNotas({notas:this.notas})
export default App;
