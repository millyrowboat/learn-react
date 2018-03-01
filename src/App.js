import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quote'

class App extends Component {

  state = {
    quotes: [
      { quote: "Stuff is cool", votes: 0 },
      { quote: "Fish is cool", votes: 4 },
      { quote: "zch is for schmucks", votes: 14 }
    ]
  }

  addQuote() {
    this.setState({
      quotes: [
        ...this.state.quotes,
        { quote: "hey", vote: 1 }
      ]
    })
  }


  // make a reducer and test it

    
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Quote Wall</h1>
        </header>

        <ul>
          {this.state.quotes.map((q,i)=> (
            <Quote key={i} text={q.quote} votes={q.votes} />
          ))}
        </ul>

        <button onClick={() => this.addQuote()}> Button </button> 


      </div>
    );
  }
}

export default App;


