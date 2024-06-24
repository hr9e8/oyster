import style from "./Selector.module.css";
import PropTypes from "prop-types";

function Selector({ selectName, selectID, title, children }) {
  return (
    <div className={style.select_wrapper}>
      <label htmlFor={selectID}>{title}</label>
      <select
        className={style.select_input}
        name={selectName}
        id={selectID}
        aria-placeholder="hello"
      >
        {children}
      </select>
    </div>
  );
}

Selector.propTypes = {
  selectName: PropTypes.string,
  selectID: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Selector;
