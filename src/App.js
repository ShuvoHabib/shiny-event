import React, {Component} from 'react';
import './App.css';
import EventView from "./components/EventView";
import MemberView from "./components/MemberView";

class App extends Component {
	state = {
		memberId: ''
	};
	locateEvent = (memberId) => {
		this.setState({
			memberId: memberId
		})
	};
	
	render() {
		return (
			<div className="App">
				<div className="row">
					<div className="col-6">
						<h2>Members</h2>
						<MemberView locateEvent={this.locateEvent}/>
					</div>
					<div className="col-6">
						<h2>Events</h2>
						<EventView memberId={this.state.memberId}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;