import React, { useState } from "react";
import { IEquipment } from "../types/types";

const Equipment = () => {

  const [Equipment, setEquipment] = useState<IEquipment[] | null>(null);

	const getEquipment = async () => {
		try {
			const response = await fetch("http://localhost:6000/equipment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
			const data = await response.json();
      console.log("data", data);
			setEquipment(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<button onClick={getEquipment}>Get Equipment</button>
			<h1>Equipments</h1>
			<h4>request to localhost:6000, a backend protected</h4>
			{Equipment !== null ? (
				Equipment?.map((equipment, i) => (
					<div key={i}>
						<h3>{equipment.name}</h3>
						<p>{equipment.description}</p>
					</div>
				))
			) : (
				<p>No equipment</p>
			)}
		</div>
	);
};

export default Equipment;
