import React from "react";

class Todo extends React.Component {
	render() {
		const {complete, text} = this.props;
	    const icon = complete ? "\u2714" : "\u2716"

		return (
	      <li>
	        <span>{text}</span>
	        <span>{icon}</span>
	      </li>
	    );
	}
}

export default Todo;