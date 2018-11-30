import React, { Component } from 'react';
import './iteration.css';

class Iteration extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.array)
    }


    render() {
        return (
            <div>
                <h2>{this.props.Title}</h2>
                <hr></hr>
                <div className="listContainer">
                    {
                        this.props.array &&
                        this.props.array.length > 0 &&
                        this.props.array.map((item, index) => {

                            return (

                                <div id="container">
                                    <div>
                                        <img id="img" src={item.avatar}></img>
                                    </div>
                                    <div id="politico"> Partito Politico: {item.partito}</div>
                                    <div id="nome"><h4>Nome: {item.nome} {item.cognome} </h4></div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }
}
export default Iteration