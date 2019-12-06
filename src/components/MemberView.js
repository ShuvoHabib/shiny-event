import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchMembers from '../utils/fetchMembers';
import {getMembers, getMembersError, getMembersPending} from '../reducers/memberReducer';

class MemberView extends Component {
	state = {
		members: [],
		deletedId: null,
		deletedIdArr: [],
	};
	
	componentDidMount() {
		this.props.fetchMembers()
	}
	
	deleteMember = (id) => {
		this.setState({
			deletedId: id
		}, ()=> this.state.deletedIdArr.push(this.state.deletedId));
	};
	
	render() {
		const {error, pending} = this.props;
		if (pending) return <p>Loading...</p>;
		if (error) return <p>Sorry, no data found</p>;
		const member = this.props.members
			.map((member) => (this.state.deletedId !== member._id && !this.state.deletedIdArr.includes(member._id)) && <div className="box-container col-4">
				<div className="box">
					<button onClick={() =>this.deleteMember(member._id)}>Delete</button>
					<div className="name">{member.name.first} {member.name.last}</div>
				</div>
			</div>);
		return (
			<div className="container">
				<div className='row row-eq-height'>
					{member}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	error: getMembersError(state),
	members: getMembers(state),
	pending: getMembersPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchMembers
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberView);

