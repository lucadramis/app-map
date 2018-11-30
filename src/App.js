import React, { Component } from 'react';
import './App.css';
import Iteration from './components/iteration/Iteration.js';
import silvio from './images/SB.jpg';
import renzi from './images/renzi.jpg';
import salvini from './images/Msalvini.jpg';

const politics =  [
  {id:0,avatar:silvio,nome:"Silvio",cognome:"Berlusconi",partito:"Forza Italia"},
  {id:1,avatar:salvini,nome:"Matteo",cognome:"Salvini",partito:"Lega"},
  {id:2,avatar:renzi,nome:"Matteo",cognome:"Renzi",partito:"PD"}
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Iteration
         array = {politics}
         Title = "Lista dei politici alle prossime elezioni govertative" 
         />
      </div>
    );
  }
}

export default App;
