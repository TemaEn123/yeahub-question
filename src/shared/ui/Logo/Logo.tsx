import { logoIcon, logoTextIcon } from "@/shared/assets";
import styles from "./styles.module.scss";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to=".">
        <img
          className={styles.logo__icon}
          src={logoIcon}
          alt="yeahub logo icon"
        />
        <img className={styles.logo__text} src={logoTextIcon} alt="yeahub" />
      </Link>
    </div>
  );
};

export default Logo;
