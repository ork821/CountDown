import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            newDeadLine: '',
        }
    }

    changeDeadline = () => {
        this.setState({
            deadline: this.state.newDeadLine,
        })
    };
    render() {

        return(
            <div className="App">
                <h2>Countdown to {this.state.deadline}</h2>
                <Clock />
                <div>
                    <input type="text"
                           placeholder="new Date"
                           onChange={(ev) => this.setState({newDeadLine: ev.target.value})}/>
                    <button onClick={this.changeDeadline}>Submit</button>
                </div>

            </div>
        )
    }
}

export default App;