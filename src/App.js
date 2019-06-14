import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 31, 2019',
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
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl type="text"
                           placeholder="new Date"
                           onChange={(ev) => this.setState({newDeadLine: ev.target.value})}/>
                    <Button onClick={this.changeDeadline}>Submit</Button>
                </Form>

            </div>
        )
    }
}

export default App;