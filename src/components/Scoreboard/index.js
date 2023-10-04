import { Component } from 'react'
import './index.css'
import TeamScore from '../TeamScore'
class Scoreboard extends Component {
    render() {
        return (
            <div className='teams-container' >
                <TeamScore teamName='1' />
                <TeamScore teamName='2' />
            </div>
        )
    }
}

export default Scoreboard