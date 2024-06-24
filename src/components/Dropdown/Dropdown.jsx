import style from "./Dropdown.module.css";
import PropTypes from "prop-types";

function Dropdown({ children }) {
  return <div className={style.dropdown}>{children}</div>;
}

Dropdown.propTypes = {
  children: PropTypes.node,
};

export default Dropdown;
