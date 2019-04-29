import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListView from '../view/UserListView';
import autobind from "auto-bind";
import userAction from '../action/userAction';
import {bindActionCreators} from "redux";

class UserListContainer extends Component {
	constructor(props) {
		super(props);
		autobind(this);
	}

	routeToUserRegister() {
		this.props.history.push(`/front/user/register`)
	}

	routeToUserModify(user) {
		this.props.history.push(`/front/user/modify?id=${user.id}`)
	}

	findAllList() {
		this.props.userAction.findAllList()
	}

	searchUser(condition, keyword) {
		this.props.userAction.searchUser(condition, keyword);
	}

	removeUser(user) {
		Promise.resolve()
			.then(() => this.props.userAction.removeUser(user))
			.then(() => this.props.userAction.findAllList())
	}

	componentDidMount() {
		this.findAllList();
	}

	render() {
		const { user, userList } = this.props;

		return (
			<UserListView
				user={user}
				userList={userList}
				routeToUserRegister={this.routeToUserRegister}
				routeToUserModify={this.routeToUserModify}
				removeUser={this.removeUser}
				searchUser={this.searchUser}
			/>
		)
	}
};

const mapStateToProps = ({ userState }) => ({
	user: userState.user,
	userList: userState.userList
});

const mapDispatchToProps = (dispatch) => ({
	userAction: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
