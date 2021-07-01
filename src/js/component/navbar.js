import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="dark">
			<Navbar.Brand href="#home">
				<img
					src="https://lh3.googleusercontent.com/proxy/841RXkx9gwELgm0u22H6U_qxOWvGqZdlku_6j-sBD8YWI1Yjxmy_W3lk-en_k7mbyfYXKQpX4pB4u0K9voETsjxFC6VulfCDWeETOBP2WfOYCkHC5JReHT7p4x_S"
					height="60"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Dropdown className="ml-auto">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu align="right">
					{store.favorites.length > 0
						? store.favorites.map((item, index) => {
								return (
									<Dropdown.Item href="#/action-1" key={index}>
										{item.name}
									</Dropdown.Item>
								);
						  })
						: "No Favorites Added"}
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
