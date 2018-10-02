import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

import { Exam, Header } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Exam
          done
          title="Física clássica"
          subtitle="Introdução a física clássica"
          text="Texto explicativo aqui :P"
          media="fisica-classica.jpg"
        />
        <Exam
          title="Física ondas"
          subtitle="Introdução a física ondas"
          media="fisica-ondas.png"
        />
      </div>
    );
  }
}

export default App;
