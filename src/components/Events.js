import React, {Component} from 'react';

class Events extends Component {
    render() {
        return (
            <div className="box-container col-6">
				<div className="box">
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

export default Events;