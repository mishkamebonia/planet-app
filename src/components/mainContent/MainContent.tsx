import { useState } from "react";
import styles from "./MainContent.module.scss";
import Accordion from "../accordion/Accordion";

const MainContent = ({ planetData }: any) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  return (
    <div>
      <Accordion
        name={planetData.planet}
        firstOption="overview"
        secondOption="structure"
        thirdOption="surface"
        accordionClass="accordionLinks"
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <div className={styles.row}>
        {activeAccordion === 1 && (
          <img className={styles.image} src={planetData.image} />
        )}
        {activeAccordion === 2 && (
          <img className={styles.image} src={planetData.structureImage} />
        )}
        {activeAccordion === 3 && (
          <div className={styles.imageContent}>
            <img className={styles.image} src={planetData.image} />
            <img className={styles.realImage} src={planetData.realPic} alt="" />
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.info}>
            <h1>{planetData.planet}</h1>
            <p className="description">
              {activeAccordion === 1 && planetData.overview}
              {activeAccordion === 2 && planetData.internalStructure}
              {activeAccordion === 3 && planetData.surfaceGeology}
            </p>
            <span className={styles.link}>
              Source:{" "}
              <a href={planetData.wikipedia} target="_blank">
                Wikipedia
              </a>
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </span>
          </div>
          <Accordion
            name={planetData.planet}
            firstOption="overview"
            secondOption="internal structure"
            thirdOption="surface geology"
            accordionClass="accordion"
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
          />
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
