import style from "./NavItem.module.css";
import PropTypes from "prop-types";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function NavItem({ path, menuTitle, children }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`${style.nav_li} ${open ? style.active : ""}`}
      onClick={handleClick}
    >
      <div className={style.nav_link}>
        <a href={path}>{menuTitle}</a>
        {children && (
          <>{!open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}</>
        )}
      </div>
      {open && children}
    </li>
  );
}

NavItem.propTypes = {
  path: PropTypes.string,
  menuTitle: PropTypes.string,
  children: PropTypes.node,
};

export default NavItem;
