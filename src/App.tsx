import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./App.scss";
import "./scss/buttons.scss";
import Navigation from "./components/navigation/Navigation";
import MainContent from "./components/mainContent/MainContent";
import { useMenu } from "./providers/hamburgerMenu";
import Menu from "./components/menu/Menu";

function App() {
  const [planetData, setPlanetData] = useState<any | null>(null);
  const { isMenuActive, setIsMenuActive } = useMenu();

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

  const handleButtonClick = (planetId: string) => {
    fetchPlanetData(planetId);
    setIsMenuActive(false);
  };

  useEffect(() => {
    handleButtonClick("mercury");
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <Navigation handleButtonClick={handleButtonClick} />
        {isMenuActive ? (
          <Menu handleButtonClick={handleButtonClick} />
        ) : (
          planetData && <MainContent planetData={planetData} />
        )}
      </div>
    </div>
  );
}

export default App;
