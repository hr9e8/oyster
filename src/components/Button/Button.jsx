import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button({ children, primary }) {
  return (
    <button className={`${primary ? style.primary_btn : style.secondary_btn}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
};
export default Button;
