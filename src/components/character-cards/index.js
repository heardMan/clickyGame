import React, { Component } from 'react';
import './style.css';


class CharacterCards extends Component {
    render() {
        return (
            <div className="row my-5">
                <div className="col-11 mx-auto">
                    <div className="card p-5 main-card rounded-0 border-0">
                        <div className="row">
                            {this.props.characters.map((element, i) => {
                                return (
                                    <div key={element.id} name={element.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                        <div className="card charcard rounded-0 border-0 hover p-2" onClick={this.props.characterSelect.bind(this, element.id)}>
                                            <div className="card-img-top">
                                                <img className="img-fluid maxH" src={element.img} alt="" />
                                            </div>
                                            <div className="card-title">
                                                {element.name}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default CharacterCards;