import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserModifyFormView from '../view/UserModifyFormView';
import {bindActionCreators} from "redux";
import userAction from '../action/userAction';
import queryString from 'query-string';
import autobind from 'auto-bind';

class UserModifyContainer extends Component {
	constructor(props) {
		super(props);
		autobind(this);
	}

	componentDidMount() {
		this.findUser();
	}

	findUser() {
		const query = queryString.parse(this.props.location.search);
		this.props.userAction.findUser(query.id);
	}

	onModifyUser() {
		const { user } = this.props;
		Promise.resolve()
			.then(() => this.props.userAction.modifyUser(user))
			.then(() => { this.props.history.push('/front/user');})
	}

	onSetUserProp(name, value) {
		this.props.userAction.setUserProp(name, value);
	}

	render() {
		const { user } = this.props;

		return (
			<UserModifyFormView
				user={user}
				onModifyUser={this.onModifyUser}
				onSetUserProp={this.onSetUserProp}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserModifyContainer);
