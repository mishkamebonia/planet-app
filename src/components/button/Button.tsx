type Props = {
  title: string;
  state: number;
  activeAccordion: number | null;
  name: string;
  setActiveAccordion: (index: number) => void;
};

const Button = ({
  title,
  state,
  name,
  activeAccordion,
  setActiveAccordion,
}: Props) => {
  const toggleChange = (index: number) => {
    if (index !== activeAccordion) {
      setActiveAccordion(index);
    }
  };

  return (
    <>
      <button
        className={`button ${name} ${
          activeAccordion === state ? "active-btn" : ""
        }`}
        onClick={() => toggleChange(state)}
      >
        <span>0{state}</span>
        {title}
      </button>
    </>
  );
};

export default Button;
