import axios from 'axios';

const URL = 'http://localhost:8080';

function registerUser(user) {
	return axios.post(`${URL}/users`, user)
		.then(response => response && response.data || null);
}

function findUser(id) {
	return axios.get(`${URL}/users/${id}`)
		.then(response => response && response.data || null);
}
function findAllUser() {
	return axios.get(`${URL}/users`)
		.then(response => response && response.data || null);
}

function modifyUser(user) {
	return axios.put(`${URL}/users/${user.id}`, user)
		.then(response => response.data);
}

function removeUser(user) {
	return axios.delete(`${URL}/users/${user.id}`)
		.then(response => response && response.data || null);
}

function searchUser(condition, keyword) {
	return axios.get(`${URL}/users?condition=${condition}&keyword=${keyword}`)
		.then(response => response && response.data || null);
}

export default {
	registerUser,
	findUser,
	findAllUser,
	modifyUser,
	removeUser,
	searchUser
}