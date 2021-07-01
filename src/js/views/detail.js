import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonSpecs } from "../component/specs/personSpecs";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const dataType = params.type.toLowerCase();
	const [resource, setResource] = useState(null);
	const [data, setData] = useState(null);
	// console.log(params);

	const getData = () => {
		if (store[dataType].length > 0 && resource === null) {
			setResource(store[dataType].filter(item => item.name == params.name)[0]);
		}
	};

	useEffect(() => {
		getData();
	});

	useEffect(
		() => {
			if (resource !== null) {
				fetch(resource.url)
					.then(res => res.json())
					.then(data => setData(data.result.properties))
					.catch(err => console.error(err));
			}
		},
		[resource]
	);

	return (
		<div className="container-fluid">
			<h1 className="display-4">{params.name}</h1>

			<hr className="my-4" />
			{data !== null && dataType === "people" && <PersonSpecs data={data} />}
			{/* <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
	);
};

Detail.propTypes = {
	match: PropTypes.object
};
