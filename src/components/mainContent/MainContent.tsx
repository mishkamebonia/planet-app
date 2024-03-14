import styles from "./MainContent.module.scss";

const MainContent = ({ planetData }: any) => {
  return (
    <div>
      <div className={styles.row}>
        <img src={planetData.image} />
        <div className={styles.content}>
          <h1>{planetData.planet}</h1>
          <p className="description">{planetData.overview}</p>
          <span className={styles.link}>
            Source: <a href="#">Wikipedia</a>
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </span>
          <div className={styles.accordion}>
            <button className="button">
              <span>01</span>
              overview
            </button>
            <button className="button">
              <span>02</span>
              Internal Structure
            </button>
            <button className="button">
              <span>03</span>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <h4>rotation time</h4>
          <h2>{planetData.rotationTime}</h2>
        </div>
        <div>
          <h4>revolution time</h4>
          <h2>{planetData.revolutionTime}</h2>
        </div>
        <div>
          <h4>radius</h4>
          <h2>{planetData.radius}</h2>
        </div>
        <div>
          <h4>average Temp.</h4>
          <h2>{planetData.averageTemp}</h2>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
