import React, { Component } from 'react';
import './Dice.css';

export class Dice extends Component {
    getDiceClass = (number) => {
        switch (number) {
            case 2:
                return 'two'
                break;
            case 3:
                return 'three'
                break;
            case 4:
                return 'four'
            case 5:
                return 'five'
            case 6:
                return 'six'
            default:
                return 'one'
                break;
        }
    }
    
    render() {
        const firstDiceClass = this.getDiceClass(this.props.firstDice);
        const secondDiceClass = this.getDiceClass(this.props.secondDice);
        return (
            <div className="dice">
                <div className="dice-box">
                    <i className={"fas fa-dice-" + firstDiceClass}></i>
                </div>
                <div className="dice-box">
                    <i className={"fas fa-dice-" + secondDiceClass}></i>
                </div>
            </div>
        );
    }
}

export default Dice;
