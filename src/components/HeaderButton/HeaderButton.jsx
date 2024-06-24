import Button from "../Button";
import style from "./HeaderButton.module.css";

function HeaderButton() {
  return (
    <div className={style.header_button_wrapper}>
      <a href="#">Login</a>
      <Button primary={false}>Speak to an Expert</Button>
      <Button primary={true}>Sign Up</Button>
    </div>
  );
}

export default HeaderButton;
