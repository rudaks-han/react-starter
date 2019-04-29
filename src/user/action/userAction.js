import { actionType } from "../reducer/UserReducer";
import userApi from '../api/userApi';

function registerUser(user) {
	return () => userApi.registerUser(user);
}

function findAllList() {
	return dispatch => userApi.findAllUser()
		.then(userList => dispatch({ type: actionType.LIST_USER, payload: userList }))
}

function findUser(id) {
	return dispatch => userApi.findUser(id)
		.then(user => dispatch({ type: actionType.FIND_USER, payload: user }))
}


function modifyUser(user) {
	return () => userApi.modifyUser(user);
}

function removeUser(user) {
	return () => userApi.removeUser(user);
}

function setUserProp(name, value) {
	return (dispatch) => dispatch({ type: actionType.SET_USER_PROP, payload: {name, value}})
}

function searchUser(condition, keyword) {
	return dispatch => userApi.searchUser(condition, keyword)
		.then(userList => dispatch({ type: actionType.LIST_USER, payload: userList }))
}


export default {
	registerUser,
	findUser,
	findAllList,
	modifyUser,
	removeUser,
	setUserProp,
	searchUser
}

export {
	registerUser,
	findUser,
	findAllList,
	modifyUser,
	removeUser,
	setUserProp,
	searchUser
}