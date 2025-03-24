import { logoIcon, logoTextIcon } from "@/shared/assets";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href=".">
        <img
          className={styles.logo__icon}
          src={logoIcon}
          alt="yeahub logo icon"
        />
        <img className={styles.logo__text} src={logoTextIcon} alt="yeahub" />
      </a>
    </div>
  );
};

export default Logo;
