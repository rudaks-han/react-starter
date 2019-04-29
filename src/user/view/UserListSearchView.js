import React, { PureComponent } from 'react';
import { Button, Select, Input } from 'semantic-ui-react'
import autobind from "auto-bind";

const options = [
	{ key: 'all', text: '전체', value: 'all' },
	{ key: 'userId', text: '아이디', value: 'userId' },
	{ key: 'name', text: '이름', value: 'name' },
	{ key: 'email', text: '이메일', value: 'email' },
	{ key: 'tel', text: '전화번호', value: 'tel' },
]

const floatRightStyle = {"float":"right"};

class UserListSearchView extends PureComponent {
	constructor(props) {
		super(props);
		autobind(this);

		this.state = {
			condition: '',
			keyword: ''
		}
	}

	onChangeKeyword(e) {
		this.setState({
			keyword: e.target.value
		});
	}

	onChangeCondition(e, data) {
		this.setState({
			condition: data.value
		})
	}

	render() {
		const {
			routeToUserRegister,
			searchUser
		} = this.props;

		return (
			<div>
				<Input type='text' placeholder='검색...' action>
					<input
						onChange={this.onChangeKeyword}
					/>
					<Select options={options} defaultValue='all'
						onChange={this.onChangeCondition}
					/>
					<Button
						onClick={() => searchUser(this.state.condition, this.state.keyword)}
					>검색</Button>
				</Input>
				<Button style={floatRightStyle}
					onClick={() => routeToUserRegister()}
				>등록</Button>
			</div>
		);
	}
}

export default UserListSearchView;