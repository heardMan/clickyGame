import React, { Component } from 'react';

import CharacterCards from '../character-cards/index';
import Welcome from '../welcome';

class Game extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <Welcome 
                        score={this.props.state.score}
                        topScore={this.props.state.topScore}
                    />

                    <CharacterCards
                        characters={this.props.state.characters}
                        characterSelect={this.props.handleCharacterSelect}
                    />
                </div>
            </div>

        );
    }
}

export default Game;