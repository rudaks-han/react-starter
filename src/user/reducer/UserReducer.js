const actionType = {
	REGISTER_USER: 'user.registerUser',
	FIND_USER: 'user.findUser',
	MODIFY_USER: 'user.modifyUser',
	REMOVE_USER: 'user.removeUser',
	LIST_USER: 'user.listUser',
	SET_USER_PROP: 'user.setUserProp',
	SEARCH_USER: 'user.searchUser'
};

const initialState = {
	userList: [],
	user: null
};

function reducer(state = initialState, action) {
	return {
		userList: userListReducer(state.userList, action),
		user: userReducer(state.user, action)
	}
};

function userListReducer(userListState, { type, payload }) {
	switch (type) {
		case actionType.LIST_USER:
			return payload;
		case actionType.SEARCH_USER:
			return payload;
		default:
			return userListState;
	}
}

function userReducer(userState, { type, payload }) {
	switch (type) {
		case actionType.REGISTER_USER:
			return payload;
		case actionType.FIND_USER:
			return payload;
		case actionType.MODIFY_USER:
			return payload;
		case actionType.REMOVE_USER:
			return initialState.user;
		case actionType.SET_USER_PROP:
			const user = {...userState, [payload.name]: payload.value}
			return {...user};
		default:
			return userState;
	}
};

export default reducer;
export { actionType };
