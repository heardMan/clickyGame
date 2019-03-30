import React, {Component} from 'react';
import Game from '../game';

class MainContent extends Component {
    
    render(){
        return(
            <div className="container-fluid mt-5">
                <Game />
            </div>
        );
    }
}

export default MainContent;