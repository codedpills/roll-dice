import React, { Component } from 'react';
import './Die.css';

export class Die extends Component {
    render() {
        return (
            <div className="die">
                <i className={`die-face fas fa-dice-${this.props.face}`}></i>
            </div>
        );
    }
}

export default Die;
