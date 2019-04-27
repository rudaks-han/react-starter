import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserListContainer extends Component {
	render() {
		return (
			"user"
		)
	}
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps)(mapDispatchToProps)(UserListContainer);