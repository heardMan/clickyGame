import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/main-content';
import Footer from './components/footer';
import characters from '../src/seed/character';
//import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  state = {
    characters: characters.all,
    alreadyChosen: [],
    score: 0,
    topScore: 0,
}

shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    })
};

handleCharacterSelect = (data) => {

    const exists = this.state.alreadyChosen.indexOf(data);
    const score = this.state.score;
    const topScore = this.state.topScore;
    const plusOne = score + 1;
    if (exists > -1) {

        if (score > topScore) {
            const shuffled = this.shuffle(this.state.characters);
            this.setState(
                {
                    characters: shuffled,
                    alreadyChosen: [],
                    score: 0,
                    topScore: score,
                }
            );
        } else {
            const shuffled = this.shuffle(this.state.characters);
            this.setState(
                {
                    characters: shuffled,
                    alreadyChosen: [],
                    score: 0,
                }
            );
        }


    } else {
        this.state.alreadyChosen.push(data);
        const shuffled = this.shuffle(this.state.characters);
        this.setState({ 
            score: plusOne,
            characters: shuffled
        });
        
    }

    console.log(this.state);


}

handleScoreChange = () => {
    const scores = {
        newScore: this.dropdown.value,
        topScore: this.dropdown.value
    }

    this.props.onScoreChange(scores);
    
}
  
  render() {
    return (
     
        <div className="App">
          <Navbar state={this.state}/>
          <MainContent 
          state={this.state}
          shuffle={this.shuffle}
          handleInputChange={this.handleInputChange}
          handleCharacterSelect={this.handleCharacterSelect}
          handleScoreChange={this.handleScoreChange}/>
          <Footer />     
        </div>
      
    );
  }
}

export default App;
