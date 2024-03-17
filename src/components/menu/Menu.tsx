import styles from "./Menu.module.scss";

type HandleButtonClick = (planetId: string) => void;

const Menu: React.FC<{ handleButtonClick: HandleButtonClick }> = ({
  handleButtonClick,
}) => {
  return (
    <div className={styles.menu}>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("mercury")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.mercury}`}
          ></i>
          <h4>mercury</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("venus")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.venus}`}
          ></i>
          <h4>venus</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("earth")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.earth}`}
          ></i>
          <h4>earth</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("mars")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.mars}`}
          ></i>
          <h4>mars</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("jupiter")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.jupiter}`}
          ></i>
          <h4>jupiter</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("saturn")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.saturn}`}
          ></i>
          <h4>saturn</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("uranus")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.uranus}`}
          ></i>
          <h4>uranus</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick("neptune")}
      >
        <div className={styles.row}>
          <i
            className={`fa-solid fa-circle ${styles.cyrcle} ${styles.neptune}`}
          ></i>
          <h4>neptune</h4>
        </div>
        <i className={`fa-solid fa-chevron-right ${styles.icon}`}></i>
      </button>
    </div>
  );
};

export default Menu;
