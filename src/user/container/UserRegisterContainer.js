import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserRegisterFormView from '../view/UserRegisterFormView';
import {bindActionCreators} from "redux";
import userAction, {setUserProp} from '../action/userAction';
import autobind from 'auto-bind';

class UserRegisterContainer extends Component {
	constructor(props) {
		super(props);
		autobind(this);
	}

	onUserRegister() {
		const { user } = this.props;

		Promise.resolve()
			.then(() => this.props.userAction.registerUser(user))
			.then(() => this.props.history.push(`/front/user`))

	}

	onSetUserProp(name, value) {
		this.props.userAction.setUserProp(name, value);
	}

	render() {
		return (
			<UserRegisterFormView
				onUserRegister={this.onUserRegister}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterContainer);
