import Scoreboard from '../Scoreboard';
import { Component } from 'react';

class Scoreboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfScoreboards: 1,
        };
    }

    incrementScoreboards = () => {
        this.setState((prevState) => ({
            numOfScoreboards: prevState.numOfScoreboards + 1,
        }));
    };

    render() {
        const scoreboards = [];
        for (let i = 0; i < this.state.numOfScoreboards; i++) {
            scoreboards.push(<Scoreboard key={i} />);
        }

        return (
            <div>
                <button onClick={this.incrementScoreboards}>Add Scoreboard</button>
                {scoreboards}
            </div>
        );
    }
}

export default Scoreboards;
