import React, { Component } from 'react';

import characters from '../../seed/character';
import CharacterCards from '../character-cards';
import Welcome from '../welcome';

class Game extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-12">
                    <Welcome />
                    <CharacterCards characters={characters}/>
                </div>
            </div>

        );
    }
}

export default Game;