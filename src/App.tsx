import React, { useEffect, useState } from "react";
import { db } from "./config/firestore";
import { doc, getDoc } from "firebase/firestore";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [planetData, setPlanetData] = useState<any | null>(null); // State to store the currently selected planet data

  // Function to fetch planet data based on the planet ID
  const fetchPlanetData = async (planetId: string) => {
    try {
      const planetDoc = doc(db, "planets", planetId);
      const planetSnapshot = await getDoc(planetDoc);
      if (planetSnapshot.exists()) {
        const planetData = planetSnapshot.data();
        setPlanetData(planetData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching planet data: ", error);
    }
  };

  // Handle button click event
  const handleButtonClick = (planetId: string) => {
    fetchPlanetData(planetId); // Fetch planet data when a button is clicked
  };

  return (
    <div>
      <Navigation handleButtonClick={handleButtonClick} />
      <div>
        {planetData && (
          <div>
            <h2>{planetData.planet}</h2>
            <p>{planetData.overview}</p>
            <img src={planetData.overviewImage} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
