import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./dataRow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DataRow = props => {
	// console.log(props.data);
	return (
		<div className="my-3">
			<h2>{props.title}</h2>
			<Row className="dataRow">
				{props.data.map((item, index) => {
					return (
						<Col xs={3} key={index}>
							<Card className="cardColors">
								<Card.Img variant="top" src="https://via.placeholder.com/350x200" />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card&apos;s content.
									</Card.Text>
									<Link to={`${props.title}/${item.name}`}>
										<Button variant="primary">Learn More</Button>
									</Link>
									<FontAwesomeIcon
										icon={faHeart}
										className="float-right"
										color="red"
										onClick={() => props.addFavorite(item)}
									/>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

DataRow.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	addFavorite: PropTypes.func.isRequired
};

export default DataRow;
