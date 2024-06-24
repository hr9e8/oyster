import {
  Globe,
  UsersRound,
  Calculator,
  Heart,
  RefreshCw,
  Share2,
  Layers,
  Link,
  Settings,
} from "lucide-react";
import style from "./ProductsDropdown.module.css";

function ProductsDropdown() {
  return (
    <nav className={style.dropdown_content}>
      <div className={style.dropdown_wrapper}>
        <h4 className={style.dropdown_title}>Global HR Solutions</h4>
        <ul>
          <li className={style.dropdown__li_wrapper}>
            <Globe />
            <a href="#">Employer of Records</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <UsersRound />
            <a href="#">Global Contractors</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Calculator />
            <a href="#">Multi-country Payroll</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Heart />
            <a href="#">Total Rewards</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <RefreshCw />
            <a href="#">Contractor Conversion</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Share2 />
            <a href="#">Talent Conversion</a>
          </li>
        </ul>
      </div>
      <div className={style.dropdown_wrapper}>
        <h4 className={style.dropdown_title}>Platforms</h4>
        <ul>
          <li className={style.dropdown__li_wrapper}>
            <Layers />
            <a href="#">Oyster Embedded</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Link />
            <a href="#">Integrations</a>
          </li>
          <li className={style.dropdown__li_wrapper}>
            <Settings />
            <a href="#">API</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ProductsDropdown;
