import React, { Component } from 'react';
import './style.css';

class Scoreboard extends Component {
    render() {
        return(
        <span> Score: {this.props.score} | Top Score: {this.props.topScore} </span>
        );
    };
}

export default Scoreboard;