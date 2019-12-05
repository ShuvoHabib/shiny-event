import React, {Component} from 'react';

class Members extends Component {
	deleteMember = () => {
		console.log('1');
		this.props.deleteMember(this.props.member._id);
	};
	render() {
		return (
			<div className="box-container col-4">
				<div className="box">
					<button onClick={this.deleteMember}>Delete</button>
					<div className="name">{this.props.member.name.first} {this.props.member.name.last}</div>
				</div>
			</div>
		);
	}
}

export default Members;