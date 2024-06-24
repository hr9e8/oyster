import {
  Key,
  LineChart,
  Ruler,
  LibraryBig,
  CalendarDays,
  Smile,
  Headphones,
  MonitorPlay,
} from "lucide-react";
import style from "./ProductsDropdown.module.css";

function ResourcesDropdown() {
  return (
    <nav className={style.dropdown_content}>
      <div className={style.dropdown_wrapper}>
        <h4 className={style.dropdown_title}>HIRING</h4>
        <ul>
          <li className={style.dropdown__li_wrapper}>
            <Key />
            <a href="#">Global Hiring Guides</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <LineChart />
            <a href="#">Employment Cost Calculator</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Ruler />
            <a href="#">Global Employment Tools</a>
          </li>
        </ul>
      </div>
      <div className={style.dropdown_wrapper}>
        <h4 className={style.dropdown_title}>LEARNING</h4>
        <ul>
          <li className={style.dropdown__li_wrapper}>
            <LibraryBig />
            <a href="#">Library</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <CalendarDays />
            <a href="#">Events</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Headphones />
            <a href="#">Podcast</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <MonitorPlay />
            <a href="#">Courses</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Smile />
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ResourcesDropdown;
