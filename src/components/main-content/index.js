import React, {Component} from 'react';
import Game from '../game';

class MainContent extends Component {
    
    render(){
        return(
            <div className="container-fluid mt-5">
                <Game 
                state={this.props.state}
                shuffle={this.props.shuffle}
                handleInputChange={this.props.handleInputChange}
                handleCharacterSelect={this.props.handleCharacterSelect}
                handleScoreChange={this.props.handleScoreChange}/>
            </div>
        );
    }
}

export default MainContent;