import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

export class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstRandomNum: 0,
            secondRandomNum: 0,
            isRolling: false
        }
    }
    generateRandomNumbers = (e) => {
        e.preventDefault();
        this.setState({isRolling: true})
        const firstRand = Math.floor(Math.random() * 6) + 1;
        const secRand = Math.floor(Math.random() * 6) + 1;
        this.setState({firstRandomNum: firstRand, secondRandomNum: secRand});
        setInterval(() => {
            this.setState({isRolling: false})
        }, 1000)
    }
    render() {
        return (
            <div className="roll-dice">
                <Dice firstDice={this.state.firstRandomNum} secondDice={this.state.secondRandomNum} />
                <button 
                    onClick={this.generateRandomNumbers}
                    disabled={this.state.isRolling}
                >
                    {this.state.isRolling ? 'Rolling' : 'Roll Dice!'}
                </button>
            </div>
        );
    }
}

export default RollDice;
