import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchEventsAction from './fetchEvents';
import {getEventsError, getEvents, getEventsPending} from './reducers/reducer';
import Events from "./Events";

class EventView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const {events, error, pending} = this.props;
        if(pending) return <p>...</p>;
        if(error) return <p>Sorry, no data found</p>;
        const myProductsReducer = events.map((event)=> <Events key={event._id} event={event}/>);
        return (
            <div className="container">
                <div className='row row-eq-height'>
					{myProductsReducer}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getEventsError(state),
    events: getEvents(state),
    pending: getEventsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEvents: fetchEventsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventView);

