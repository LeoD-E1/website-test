import React, { useState } from "react";
import { IEquipment } from "../types/types";

if (process.env.NODE_ENV === "production") {
	require("dotenv").config();
}

const Equipment: React.FC = () => {
	const [Equipment, setEquipment] = useState<IEquipment[]>([]);
	const [load, setLoad] = useState(true);

	const getEquipment = async () => {
		console.log(Equipment);
		try {
			const response = await fetch("http://192.168.4.162:6000/equipment" || process.env.REACT_APP_GET_EQUIPMENT, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});

			const data = await response.json();
			if (typeof data === "object") {
				setEquipment(data);
				setLoad(false);
			} else {
				console.log("data", data);
			}
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<button onClick={getEquipment}>Get Equipment</button>
			<h1>Equipments</h1>
			<h4>request to localhost:6000, a backend protected</h4>
			{load ? (
				<p>No equipment</p>
			) : (
				Equipment.map((equipment: IEquipment) => {
					return (
						<ul key={equipment.name}>
							<li>
								<h3>{equipment.name}</h3>
								<h4>{equipment.description}</h4>
								<p>{equipment.type}</p>
							</li>
						</ul>
					);
				})
			)}
		</div>
	);
};

export default Equipment;
