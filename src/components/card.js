import React, { Component } from 'react';


export default class Card extends Component {

    render() {
        return (
            <div className="card">

                <div className="card-body" id="outer">

                    <div className="container" id="title">
                        <div className="row">
                            <div className="col-sm">
                                <h5 className="card-title">{this.props.info.name}</h5>
                            </div>
                            <div class="col-sm">
                                <h5 className="card-title" id="totalMana">
                                    <img className="card-img" id="mana" src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/4/44/6.svg?version=d5990d400f0ab774eac7feea31b4d2de" alt="Card image cap" />
                                    <img className="card-img" id="mana" src="https://cdn2.bigcommerce.com/server1500/ac84d/products/349/images/808/GTT-MTG-003__97882.1315464922.1280.1280.jpg?c=2" alt="Card image cap" />
                                    <img className="card-img" id="mana" src="https://cdn2.bigcommerce.com/server1500/ac84d/products/349/images/808/GTT-MTG-003__97882.1315464922.1280.1280.jpg?c=2" alt="Card image cap" />
                                </h5>
                            </div>
                        </div>
                    </div>



                    <img className="card-img" src="https://assets.echomtg.com/magic/cards/cropped/88171.hq.jpg" alt="Card image cap"></img>

                    <div className="container" id="title">
                        <div className="row">
                            <div className="col-sm">
                                <h6 className="card-title">{this.props.info.type}</h6>
                            </div>
                            <div class="col-sm">
                                <h6 className="card-title" id="totalMana">
                                    <img className="card-img" id="mana" src={this.props.info.expansion} alt="Card image cap" />
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div id="title">
                        <p className="card-text">
                            <img className="card-img" id="mana" src="https://cdn2.bigcommerce.com/server1500/ac84d/products/349/images/808/GTT-MTG-003__97882.1315464922.1280.1280.jpg?c=2" alt="Card image cap" />
                            {this.props.info.ability}</p>
                        <p className="card-text" id="flavor" >{this.props.info.lore}</p>

                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <p id="black"><strong>{this.props.info.artist}</strong></p>
                            </div>
                            <div class="col-sm">
                                <p id="black">{this.props.info.number}</p>

                            </div>
                            <div class="col-sm">
                            </div>
                            <div class="col-sm" id="title">
                                <p id="big-font"><strong>{this.props.info.stats}</strong></p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );


    }

}


