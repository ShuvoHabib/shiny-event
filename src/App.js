import React, {Component} from 'react';
import {connect} from 'react-redux';
import {eventAction} from './actions/eventAction';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    eventAction = (event) => {
        this.props.eventAction();
    };

    render() {
        return (
            <div className="App">
                <pre>
                 {
                     JSON.stringify(this.props)
                 }
                </pre>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload
                </p>
                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    eventAction: () => dispatch(eventAction())
});
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps, mapDispatchToProps)(App);