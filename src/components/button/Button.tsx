type Props = {
  title: string;
  state: number;
  activeAccordion: number | null;
  setActiveAccordion: (index: number) => void;
};

const Button = ({
  title,
  state,
  activeAccordion,
  setActiveAccordion,
}: Props) => {
  function toggleChange(index: number) {
    if (index !== activeAccordion) {
      setActiveAccordion(index);
    }
  }

  return (
    <>
      <button
        className={`button ${activeAccordion === state ? "active-btn" : ""}`}
        onClick={() => toggleChange(state)}
      >
        <span>0{state}</span>
        {title}
      </button>
    </>
  );
};

export default Button;
