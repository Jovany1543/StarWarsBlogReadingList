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
					src="https://lh3.googleusercontent.com/proxy/_6aFlPryhXlcG68Nkn3sSwfxbrgllqgtF45YxE3pVwY_Xhb_rkSqHgN9OD-OJd00c5hploJa01rVPhhY0mXXv2HTa_aj8rIPYxat588-5rLAb2j7PTMhNNoPQ5jp"
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
