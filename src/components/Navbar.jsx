import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarList from "./NavbarList";
import style from "./Navbar.module.css";

const Navbar = () => {
	const [showList, setShowList] = useState(false);

	return (
		<nav className={style.navbar}>
			<NavLink className={style.navbar__link} to="/">
				<h1 className={style.navbar__name}>
					Jose
					<span className={style.navbar__lastname}>de la cruz</span>
				</h1>
			</NavLink>
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
