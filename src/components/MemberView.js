import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchMembers from '../utils/fetchMembers';
import {getMembers, getMembersError, getMembersPending} from '../reducers/memberReducer';
import {selectedMember, locateEvent} from "../actions/action";

class MemberView extends Component {
	state = {
		members: null,
		deletedId: null,
		deletedIdArr: [],
		sortData: '',
		selected: false,
		allEvents: ''
	};
	
	componentDidMount() {
		this.props.fetchMembers();
	}
	
	componentDidUpdate(nextProps) {
		const {members} = this.props
		if (nextProps.members !== members) {
			if (members) {
				this.setState({
					members: this.props.members,
				});
			}
		}
	}
	
	deleteMember = (id) => {
		this.setState({
			deletedId: id
		}, () => this.state.deletedIdArr.push(this.state.deletedId));
	};
	
	selectedMember = (id) => {
		this.setState({selected: id}, () => {
			this.props.selectedMember(id);
		});
	};
	
	sortArr = (sortData) => {
		this.setState({
			sortData
		});
	};
	
	locateEvent = (id) => {
		this.props.locateEvent(id);
		this.props.locateEventId();
	};
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			allEvents: nextProps.selected && nextProps.selected
		})
	}
	
	
	render() {
		const selected = classNames('box-container col-4', {
			'selected': this.state.selected,
		});
		const {error, pending} = this.props;
		if (pending) return <p>Loading...</p>;
		if (error) return <p>Sorry, no data found</p>;
		let members = this.state.members;

		if (this.state.sortData === 'ageAsc') {
			members.sort(function (a, b) {
				return parseFloat(a.age) - parseFloat(b.age);
			});
		} else if (this.state.sortData === 'ageDesc') {
			members.sort(function (a, b) {
				return parseFloat(b.age) - parseFloat(a.age);
			});
		} else if (this.state.sortData === 'nameAsc') {
			members.sort(function (a, b) {
				return (a.name.first > b.name.first) * 2 - 1;
			});
		} else if (this.state.sortData === 'nameDesc') {
			members.sort(function (a, b) {
				return (b.name.first > a.name.first) * 2 - 1;
			});
		}
		
		const member = this.state.members && this.state.members
			.map((member) => (this.state.deletedId !== member._id && !this.state.deletedIdArr.includes(member._id)) &&
				<div className="box-container col-4"
					 style={{border: (this.state.selected === member._id) && '1px solid green'}}>
					<div className="box">
						<button onClick={() => this.selectedMember(member._id)}>Select Member</button>
						<button onClick={() => this.deleteMember(member._id)}>Delete</button>
						<div className="name">{member.name.first} {member.name.last}</div>
						{
							this.state.allEvents
							&& this.state.allEvents.map((event) => event.events.length > 0 && event.id).includes(member._id)
							&& <button onClick={() => this.locateEvent(member._id)}>locate on calendar</button>
						}
					</div>
				</div>);
		return (
			<div className="container">
				<div className="sort-by">
					<span>Sort by - </span>

					<button onClick={() => this.sortArr('ageAsc')}>Age:ascending</button>
					<button onClick={() => this.sortArr('ageDesc')}>Age:descending</button>
					<button onClick={() => this.sortArr('nameAsc')}>Name:ascending</button>
					<button onClick={() => this.sortArr('nameDesc')}>Name:descending</button>
				</div>
				<div className='m-top-20 row row-eq-height'>
					{member}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	error: getMembersError(state),
	members: getMembers(state),
	pending: getMembersPending(state),
	selected: state.members.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchMembers,
	selectedMember,
	locateEventId: locateEvent
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberView);

