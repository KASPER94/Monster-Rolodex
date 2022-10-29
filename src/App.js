import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      name: {Firstname: "Léo", Lastname: 'Kaperski'},
      CCI: "IQEQ"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> 
            Hello I am {this.state.name.Firstname} {this.state.name.Lastname} and i'm working at {this.state.CCI}
          </p>
          <button onClick={() => {
            this.setState(() => {
              return{
                name: {Firstname:"Simon", Lastname:"Kaperski"}, CCI: "my own C"
              }
            }, () => {
              console.log(this.state)
            });
          }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
