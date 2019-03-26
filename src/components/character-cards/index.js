import React, { Component } from 'react';
import characters from '../../seed/character';


class CharacterCards extends Component {
    render() {
        return (
            <div class="row">
                {this.props.characters.all.map((element, i) => {
                    return (
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-img-top">
                        <img src={element.img} alt=""/>
                    </div>
                    <div class="card-title">
                        {element.name}
                    </div>
                </div>
            </div>
                    );
                })}

                {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-img-top">
                        <img src={this.props.image} alt=""/>
                    </div>
                    <div class="card-title">
                        {this.props.name}
                    </div>
                </div>
            </div> */}

            </div>
        );
    }
}

export default CharacterCards;