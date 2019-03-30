import React, { Component } from 'react';
import './style.css';

import Scoreboard from '../scoreboard';

class Welcome extends Component {
    render() {
        return (
            <div className="row my-5 text-white">
                <div className="col-11 mx-auto">
                    <div className="card rounded-0 p-5 shadow1 bg-skulls" >
                        <div className="card-title">
                            <h3>Clicky Game</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-12">
                                    <p>Welcome to Clicky Game Cllick an image to start the game!</p>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-12">
                                    <Scoreboard 
                                        score={this.props.score}
                                        topScore={this.props.topScore}
                                    />
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;