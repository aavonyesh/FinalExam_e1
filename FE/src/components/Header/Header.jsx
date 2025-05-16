import React from "react";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import styles from "../Header/style.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.telephone}>
          <BsFillTelephonePlusFill />+ 1235 2355 98
        </div>
        <div className="email">
          <BiLogoTelegram />
          youremail@email.com
        </div>
        <div className="description">
          3-5 Business days delivery & Free Returns
        </div>
      </div>
    </div>
  );
}

export default Header;
