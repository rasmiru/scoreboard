import { Component } from 'react'
import './index.css'

// Class component for TeamScore
class TeamScore extends Component {
    // Initial state for the component
    initialState = {
        runs: 0,
        wickets: 0,
        allOut: false,
        teamName: this.props.teamName // Initialize teamName with the prop value
    }

    constructor(props) {
        super(props);
        // Initialize the state with the initial state values
        this.state = this.initialState;
    }

    // Function to update the wickets
    updateWickets = () => {
        // Updating the wickets count in the state
        this.setState((prevState) => ({
            wickets: prevState.wickets + 1,
        }), () => {
            // Checking if wickets reach 10, set allOut to true
            if (this.state.wickets === 10) {
                this.setState({ allOut: true });
            }
        });
    };

    // Function to update the runs
    updateRuns = (numOfRuns) => {
        // Updating the runs count in the state
        this.setState(prevState => ({
            runs: prevState.runs + numOfRuns
        }));
    }

    // Function to reset the wickets and runs
    resetWickets = () => {
        // Resetting the state to the initial state
        this.setState({
            ...this.initialState
        });
    }

    setTeamNameWithPrompt = () => {
        const teamName = prompt("Please enter the team name:");
        if (teamName) {
            this.setState({ teamName });
        }
    };


    render() {
        // Destructuring state values for easier access
        const { runs, wickets, allOut } = this.state;

        return (
            <div className='scoreboard-container'>
                <div id='headerContainer'>
                    <h1>Team: {this.state.teamName}</h1>
                    <button className='edit-button' onClick={this.setTeamNameWithPrompt}>Edit</button>
                </div>
                <p id='runs'>Runs: {runs}</p>
                <p id='wickets'>Wickets: {wickets}</p>
                {/* Conditional rendering based on allOut status */}
                {allOut ? (
                    <>
                        <p id='all-out-label'>All out!</p>
                        <button onClick={() => this.resetWickets()}>Reset</button>
                    </>
                ) : (
                    <div className='button-container'>
                        <button className='run-button' onClick={() => this.updateRuns(1)}>1 Run</button>
                        <button className='run-button' onClick={() => this.updateRuns(4)}>4 Runs</button>
                        <button className='run-button' onClick={() => this.updateRuns(6)}>6 Runs</button>
                        <button id='wicket-button' onClick={() => this.updateWickets()}>Wicket</button>
                    </div>
                )}
            </div>
        )
    }
}

export default TeamScore;
