import React, { Component } from 'react';
import Die from './Die';

export class RollDice extends Component {
    static defaultProps = {
        sides: [ 'one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = { die1: 'two', die2: 'four'}
    }
    rollDice = () => {
        const newDie1 = this.props.sides[ Math.floor(Math.random() * this.props.sides.length) ];
        const newDie2 = this.props.sides[ Math.floor(Math.random() * this.props.sides.length) ];
        this.setState({ die1: newDie1, die2: newDie2 });
    }
    render() {
        return (
            <div>
                <Die face={this.state.die1}/>
                <Die face={this.state.die2} />
                <button onClick={this.rollDice}>Roll dice</button>
            </div>
        );
    }
}

export default RollDice;
