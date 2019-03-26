import React, {Component} from 'react';
import Game from '../game';

class MainContent extends Component {
    render(){
        return(
            <div class="container-fluid">
                <Game />
            </div>
        );
    }
}

export default MainContent;