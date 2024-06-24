import style from "./Header.module.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import HeaderButton from "../HeaderButton";

function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <NavMenu />
      <HeaderButton />
    </header>
  );
}

export default Header;
