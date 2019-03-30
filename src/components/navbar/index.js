import React, { Component } from 'react';
import './style.css';

import Scoreboard from '../scoreboard';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top py-3 nav-shadow">
                <a className="navbar-brand" href="#"><strong>Clicky Game</strong></a>
                
                <ul className="navbar-nav text-white ml-auto">
                        <li>
                            <Scoreboard score={this.props.state.score}
                                        topScore={this.props.state.topScore}/>
                        </li>
                    </ul>
            </nav>
        );
    }
}

export default Navbar;