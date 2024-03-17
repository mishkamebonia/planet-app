import Button from "../button/Button";
import styles from "./Accordion.module.scss";

type Props = {
  activeAccordion: number | null;
  accordionClass: string;
  name: string;
  firstOption: string;
  secondOption: string;
  thirdOption: string;
  setActiveAccordion: (index: number) => void;
};

const Accordion = ({
  name,
  firstOption,
  secondOption,
  thirdOption,
  accordionClass,
  activeAccordion,
  setActiveAccordion,
}: Props) => {
  return (
    <div className={`${styles[accordionClass]}`}>
      <Button
        state={1}
        title={firstOption}
        name={name}
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <Button
        state={2}
        title={secondOption}
        name={name}
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <Button
        state={3}
        title={thirdOption}
        name={name}
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
    </div>
  );
};

export default Accordion;
