import React, {Component} from 'react';
import './App.css';
import ProductView from "./productView";

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