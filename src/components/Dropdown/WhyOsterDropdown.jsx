import {
  Lightbulb,
  MapPin,
  ShieldCheck,
  Smile,
  Zap,
  MessageSquareMore,
} from "lucide-react";
import style from "./ProductsDropdown.module.css";

function WhyOsterDropdown() {
  return (
    <nav className={style.dropdown_content}>
      <div className={style.dropdown_wrapper}>
        <ul>
          <li className={style.dropdown__li_wrapper}>
            <Lightbulb />
            <a href="#">How Oyster Works</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <MapPin />
            <a href="#">Country Coverage</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <ShieldCheck />
            <a href="#">Global Compliance</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Smile />
            <a href="#">Strategic Partnership</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Zap />
            <a href="#">Automated Hiring</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <MessageSquareMore />
            <a href="#">Case Studies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default WhyOsterDropdown;
