import React from 'react';
import ReactDOM from "react-dom/client";
import axios from 'axios';
import './App.css';

import PlayerForm from './Players/player-form';
import PlayerList from './Players/player-list';
import PlayerSingle from './Players/player-single';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      players:[],
      currentPlayer:{}

    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount(){
    const url = 'http://localhost:4000/players'
    axios.get(url)
    .then((Response)=>{
      this.setState({
        players:Response.data
      })
    })
    .catch((error) => console.log(error))
  }

  updateCurrentPlayer(item){
    this.setState({
      currentPlayer:item
    })
  }
  render() { 
    return (
      <div className="container-fluid">
        <div className="row"> 
          <div className="nav-wrapper blue darken-1"> 
          <a href='/' className='brand-logo'>Welcome Players</a></div>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players} 
          updateCurrentPlayer={this.updateCurrentPlayer}/></div>  
          <div className="col s6"><PlayerSingle player={this.state.currentPlayer}/></div>  
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm /></div>  
        </div>
      </div>
    );
  }
}

// Ensure React 18 renders correctly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
