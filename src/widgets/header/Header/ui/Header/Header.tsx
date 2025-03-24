import Logo from "@/shared/ui/Logo/Logo";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} container`}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
