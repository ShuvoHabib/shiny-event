import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchMembers from '../utils/fetchMembers';
import {getMembers, getMembersError, getMembersPending} from '../reducers/memberReducer';
import {selectedMember} from "../actions/action";

class MemberView extends Component {
	state = {
		members: null,
		deletedId: null,
		deletedIdArr: [],
		sortData: '',
		selected: false,
	};
	
	componentDidMount() {
		this.props.fetchMembers();
	}
	
	componentDidUpdate(nextProps) {
		const { members } = this.props
		if (nextProps.members !== members) {
			if (members) {
				this.setState({
					members: this.props.members,
				},()=>{
					console.log('memebrr', this.state.members);
				})
			}
		}
	}
	
	deleteMember = (id) => {
		this.setState({
			deletedId: id
		}, () => this.state.deletedIdArr.push(this.state.deletedId));
	};
	
	selectedMember = (id) => {
		this.setState({selected: id}, () =>{
			this.props.selectedMember(id);
		});
	};
	
	sortArr = (sortData) => {
		this.setState({
			sortData
		});
	};
	
	render() {
		const selected = classNames('box-container col-4',{
			'selected': this.state.selected,
		});
		const {error, pending} = this.props;
		if (pending) return <p>Loading...</p>;
		if (error) return <p>Sorry, no data found</p>;
		let members = this.props.members;
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
				<div className="box-container col-4" style={{border: (this.state.selected === member._id) && '1px solid green'}}>
					<div className="box">
						<button onClick={() => this.deleteMember(member._id)}>Delete</button>
						<button onClick={() => this.selectedMember(member._id)}>Select Member</button>
						<div className="name">{member.name.first} {member.name.last}</div>
					</div>
				</div>);
		return (
			<div className="container">
				<div className="sort-by">
					<span>Sort by - </span>
					<p onClick={() => this.sortArr('ageAsc')}>Age:ascending</p>
					<p onClick={() => this.sortArr('ageDesc')}>Age:descending</p>
					<p onClick={() => this.sortArr('nameAsc')}>Name:ascending</p>
					<p onClick={() => this.sortArr('nameDesc')}>Name:descending</p>
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
	pending: getMembersPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchMembers,
	selectedMember,
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberView);

