import React, {PureComponent} from 'react';
import {Button, Table} from 'semantic-ui-react'

class UserListTableView extends PureComponent {

	renderTable() {
		const {
			userList,
			routeToUserModify,
			removeUser
		} = this.props;

		if (!userList)
			return;

		if (!userList.length)
			return;

		return (
			<Table.Body>
				{
					userList && Array.isArray(userList) && userList.length &&
					userList.map(user => {
						return (
							<Table.Row key={user.id}>
								<Table.Cell>{user.userId}</Table.Cell>
								<Table.Cell>{user.name}</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
								<Table.Cell>{user.tel}</Table.Cell>
								<Table.Cell>
									<Button
										onClick={() => routeToUserModify(user)}
									>수정</Button>
									<Button color="red"
											onClick={() => removeUser(user)}
									>삭제</Button>
								</Table.Cell>
							</Table.Row>
						)
					})
				}

			</Table.Body>
		);
	}
	render() {

		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>아이디</Table.HeaderCell>
						<Table.HeaderCell>이름</Table.HeaderCell>
						<Table.HeaderCell>이메일</Table.HeaderCell>
						<Table.HeaderCell>전화번호</Table.HeaderCell>
						<Table.HeaderCell>추가기능</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				{this.renderTable()}

			</Table>
		);
	}
}

export default UserListTableView;