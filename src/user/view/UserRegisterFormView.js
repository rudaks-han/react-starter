import React, {PureComponent} from 'react';
import { Button, Form } from 'semantic-ui-react';
import autobind from "auto-bind";
import { withRouter} from "react-router-dom";

class UserRegisterFormView extends PureComponent {
	constructor(props) {
		super(props);
		autobind(this);
	}

	render() {
		const {
			onUserRegister,
			onSetUserProp
		} = this.props;

		return (
			<Form>
				<Form.Field>
					<label>아이디</label>
					<input placeholder='아이디를 입력하세요.'
						onChange={(e) => onSetUserProp('userId', e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>이름</label>
					<input placeholder='이름을 입력하세요.'
						onChange={(e) => onSetUserProp('name', e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>이메일</label>
					<input placeholder='이메일을 입력하세요.'
						onChange={(e) => onSetUserProp('email', e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>전화번호</label>
					<input placeholder='전화번호를 입력하세요.'
						onChange={(e) => onSetUserProp('tel', e.target.value)}
					/>
				</Form.Field>
				<Button color="blue" type='submit'
						onClick={() => onUserRegister()}
				>등록</Button>
				<Button
					onClick={() => this.props.history.goBack()}
				>취소</Button>
			</Form>
		);
	}
}

export default withRouter(UserRegisterFormView);