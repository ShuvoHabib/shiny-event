import React, {Component} from 'react';

class Events extends Component {
    render() {
        return (
            <div>
                {this.props.event.name.first}
            </div>
        );
    }
}

export default Events;