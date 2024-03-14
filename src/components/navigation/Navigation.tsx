type HandleButtonClick = (planetId: string) => void;

const Navigation: React.FC<{ handleButtonClick: HandleButtonClick }> = ({
  handleButtonClick,
}) => {
  return (
    <ul>
      <li>
        <button onClick={() => handleButtonClick("mercury")}>Mercury</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("venus")}>Venus</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("earth")}>Earth</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("mars")}>Mars</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("jupiter")}>Jupiter</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("saturn")}>Saturn</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("uranus")}>Uranus</button>
      </li>
      <li>
        <button onClick={() => handleButtonClick("neptune")}>Neptune</button>
      </li>
    </ul>
  );
};

export default Navigation;
