import React, { Component } from 'react';

import characters from '../../seed/character';
import CharacterCards from '../character-cards/index';
import Welcome from '../welcome';



// const shuffle = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

//shuffle(characters.all);

class Game extends Component {
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
            <div className="row">
                <div className="col-12">
                    <Welcome 
                        score={this.state.score}
                        topScore={this.state.topScore}
                    />

                    <CharacterCards
                        characters={this.state.characters}
                        characterSelect={this.handleCharacterSelect}
                    />
                </div>
            </div>

        );
    }
}

export default Game;