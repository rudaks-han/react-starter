import React, { PureComponent } from 'react';
import UserListSearchView from './UserListSearchView';
import UserListTableView from './UserListTableView';

class UserListView extends PureComponent {
	render() {
		const {
			routeToUserRegister,
			routeToUserModify,
			removeUser,
			userList,
			searchUser
		} = this.props;

		return (
			<div>
				<UserListSearchView
					routeToUserRegister={routeToUserRegister}
					searchUser={searchUser}
				/>
				<UserListTableView
					userList={userList}
					routeToUserModify={routeToUserModify}
					removeUser={removeUser}
				/>
			</div>
		);
	}
}

export default UserListView;