import style from "./NavMenu.module.css";
import NavItem from "../NavItem";
import Dropdown from "../Dropdown";
import ProductsDropdown from "../Dropdown/ProductsDropdown";
import WhyOsterDropdown from "../Dropdown/WhyOsterDropdown";
import ResourcesDropdown from "../Dropdown/ResourcesDropdown";

function NavMenu() {
  return (
    <nav>
      <ul className={style.nav_ul}>
        <NavItem path="#" menuTitle="Products">
          <Dropdown>
            <ProductsDropdown />
          </Dropdown>
        </NavItem>
        <NavItem path="#" menuTitle="Why Oster">
          <Dropdown>
            <WhyOsterDropdown />
          </Dropdown>
        </NavItem>
        <NavItem path="#" menuTitle="Resources">
          <Dropdown>
            <ResourcesDropdown />
          </Dropdown>
        </NavItem>
        <NavItem path="#" menuTitle="Pricing" />
      </ul>
    </nav>
  );
}

export default NavMenu;
