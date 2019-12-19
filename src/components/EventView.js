import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchEventsAction from '../utils/fetchEvents';
import {getEventsError, getEvents, getEventsPending} from '../reducers/reducer';
import Events from "./Events";

class EventView extends Component {
	state = {
		allEvents: null,
		isSelected: true,
		selectedMemberId:'',
	};
	
	componentDidMount() {
		this.props.fetchEvents();
	}
	
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			allEvents: nextProps.selected && nextProps.selected,
			isSelected: nextProps.isSelected && nextProps.isSelected,
			selectedMemberId: nextProps.selectedMemberId && nextProps.selectedMemberId
		})
	}
	
	render() {
		const {events, error, pending, selectedMemberId} = this.props;
		const {allEvents,isSelected} = this.state;
		const selectedEventsId = allEvents && allEvents.filter((x) => x.id === selectedMemberId);
		console.log('selectedEventsId', selectedEventsId);
		if (pending) return <p>Loading...</p>;
		if (error) return <p>Sorry, no data found</p>;
		
		let myEvents;
		if(selectedEventsId && selectedEventsId[0]) {
			myEvents = events && events.filter((event) => {
				return selectedEventsId && selectedEventsId[0].events.includes(event._id)
			});
			console.log('myEvents', myEvents);
		}
		let eventsData;
		if(selectedMemberId && isSelected){
			eventsData = myEvents.map((event) => <Events key={event._id} event={event}/>);
		} else {
			eventsData = events.map((event) => <Events key={event._id} event={event}/>);
		}
		return (
			<div className="container">
				<div className='row row-eq-height'>
					{eventsData}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	error: getEventsError(state),
	events: getEvents(state),
	pending: getEventsPending(state),
	selected: state.members.selected,
	isSelected: state.members.isSelected,
	selectedMemberId: state.members.selectedMemberId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchEvents: fetchEventsAction
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventView);

