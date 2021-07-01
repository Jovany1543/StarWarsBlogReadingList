import React, { useContext } from "react";
import "../../styles/home.scss";
import DataRow from "../component/DataRow/dataRow";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="mt-5 backgroundimg">
			{store.people.length > 0 && (
				<DataRow title="People" data={store.people} addFavorite={actions.addFavorite} />
			)}
			{store.planets.length > 0 && (
				<DataRow title="Planets" data={store.planets} addFavorite={actions.addFavorite} />
			)}
			{store.starships.length > 0 && (
				<DataRow title="Starships" data={store.starships} addFavorite={actions.addFavorite} />
			)}
		</div>
	);
};
