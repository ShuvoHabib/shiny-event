import React, {Component} from 'react';
import classNames from 'classnames';
import {getEvents,} from "../reducers/memberReducer";
import {bindActionCreators} from "redux";
import {addEvent} from "../actions/action";
import {connect} from "react-redux";

class Events extends Component {
    state = {
        addEvent: false,
        display: true,
    };
    addEvent = (id) => {
        this.props.addEvent({events: [id]});
    };
    toggleEvent = () => {
        this.setState({
            display: !this.state.display
        });
    };

    render() {
        const selected = classNames('box-container events', {
            selected: this.state.selected,
            hidden: !this.state.display,
        });
        return (
            <div className="col-6">
                <div className="row">
                    <button onClick={this.toggleEvent}>Toggle Event</button>
                    <div className={selected}>
                        <div className="box">
                            {this.props.selected &&
                            <button onClick={() => this.addEvent(this.props.event._id)}>Add Event</button>
                            }
                            <div
                                className="name">{this.props.event.organizer.first} {this.props.event.organizer.last}</div>
                            <div className="company">{this.props.event.company}</div>
                            {/*<div className="about">{this.props.event.about}</div>*/}
                            <div className="scheduled_at">{this.props.event.scheduled_at}</div>
                            <div className="duration">{this.props.event.duration}</div>
                            <div className="capacity">Capacity: {this.props.event.capacity}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: getEvents(state),
    selected: state.members.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addEvent,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events);