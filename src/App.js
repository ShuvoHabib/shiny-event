import React, {Component} from 'react';
import './App.css';
import ProductView from "./EventView";

class App extends Component {

    render() {
        return (
            <div className="App">
                <ProductView />
            </div>
        );
    }
}

export default App;