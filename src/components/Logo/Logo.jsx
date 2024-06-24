import style from "./Logo.module.css";
import oysterLogo from "../../assets/logo/oyster-logo.svg";

function Logo() {
  return (
    <a href="/">
      {" "}
      <img className={style.logo} src={oysterLogo} alt="Oyster Logo" />
    </a>
  );
}

export default Logo;
