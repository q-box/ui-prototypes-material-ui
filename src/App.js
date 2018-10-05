import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

import { ExamGrid, Header } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExamGrid />
      </div>
    );
  }
}

export default App;
