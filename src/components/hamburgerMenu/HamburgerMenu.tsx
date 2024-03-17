import { useMenu } from "../../providers/hamburgerMenu";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = () => {
  const { isMenuActive, setIsMenuActive } = useMenu();

  const isToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={isToggle}>
        <i className={`fa-solid fa-bars ${isMenuActive || styles.active}`}></i>
      </button>
    </div>
  );
};

export default HamburgerMenu;
