import { useState } from "react";
import style from "./Navbar.module.css";
import NavbarList from "./NavbarList";

const Navbar = () => {
	const [showList, setShowList] = useState(false);

	return (
		<nav className={style.navbar}>
			<a className={style.navbar__link} href="#">
				<h1 className={style.navbar__name}>José de la cruz</h1>
			</a>
			<figure className={style.navbar__menu}>
				<img
					className={style.navbar__toggle}
					onClick={() => setShowList(!showList)}
					src="/menu.png"
					alt="Menú toggle"
				/>
			</figure>
			<NavbarList showMenuList={showList} />
		</nav>
	);
};

export default Navbar;
