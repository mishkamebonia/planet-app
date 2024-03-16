import styles from "./Navigation.module.scss";

type HandleButtonClick = (planetId: string) => void;

const Navigation: React.FC<{ handleButtonClick: HandleButtonClick }> = ({
  handleButtonClick,
}) => {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>the planets</p>
      <div className={styles.row}>
        <button
          className={styles.mercury}
          onClick={() => handleButtonClick("mercury")}
        >
          <h4>Mercury</h4>
        </button>
        <button
          className={styles.venus}
          onClick={() => handleButtonClick("venus")}
        >
          <h4>Venus</h4>
        </button>
        <button
          className={styles.earth}
          onClick={() => handleButtonClick("earth")}
        >
          <h4>Earth</h4>
        </button>
        <button
          className={styles.mars}
          onClick={() => handleButtonClick("mars")}
        >
          <h4>Mars</h4>
        </button>
        <button
          className={styles.jupiter}
          onClick={() => handleButtonClick("jupiter")}
        >
          <h4>Jupiter</h4>
        </button>
        <button
          className={styles.saturn}
          onClick={() => handleButtonClick("saturn")}
        >
          <h4>Saturn</h4>
        </button>
        <button
          className={styles.uranus}
          onClick={() => handleButtonClick("uranus")}
        >
          <h4>Uranus</h4>
        </button>
        <button
          className={styles.neptune}
          onClick={() => handleButtonClick("neptune")}
        >
          <h4>Neptune</h4>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
