import React, {Component} from 'react';
import classNames from 'classnames';
import {getEvents,} from "../reducers/memberReducer";
import {bindActionCreators} from "redux";
import {addEvent} from "../actions/action";
import {connect} from "react-redux";

class Events extends Component {
	state = {
		addEvent: false
	};
	addEvent = (id) => {
		this.props.addEvent({events: [id]});
	};
	
	render() {
		const selected = classNames('box-container col-6', {
			selected: this.state.selected
		});
		return (
			<div className={selected}>
				<div className="box">
					<button onClick={() => this.addEvent(this.props.event._id)}>Add Event</button>
					<div className="name">{this.props.event.organizer.first} {this.props.event.organizer.last}</div>
					<div className="company">{this.props.event.company}</div>
					{/*<div className="about">{this.props.event.about}</div>*/}
					<div className="scheduled_at">{this.props.event.scheduled_at}</div>
					<div className="duration">{this.props.event.duration}</div>
					<div className="capacity">{this.props.event.capacity}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	events: getEvents(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	addEvent,
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Events);