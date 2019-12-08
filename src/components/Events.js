import React, {Component} from 'react';
import {getEvents,} from "../reducers/memberReducer";
import {bindActionCreators} from "redux";
import {addEvent} from "../actions/action";
import {connect} from "react-redux";

class Events extends Component {
	addEvent = (id) => {
		console.log(this.props.events.id, 33)
		this.props.addEvent({id: this.props.events.id, events:[id]});
	};

	render() {
        return (
            <div className="box-container col-6">
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