import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PersonSpecs = props => {
	const [person, setPerson] = useState(props.data);

	return (
		<div>
			<h3>Height</h3>
			<p>{person.height}</p>
		</div>
	);
};

PersonSpecs.propTypes = {
	data: PropTypes.object
};
