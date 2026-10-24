import { NavLink } from "react-router-dom";
import style from "./NavbarList.module.css";

const NavbarList = ({ showMenuList, onClose }) => {
	const menuList = showMenuList
		? `${style.navbar__list} ${style.show__navbar}`
		: style.navbar__list;

	return (
		<ul className={menuList}>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/" onClick={onClose}>
					Home
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/projects" onClick={onClose}>
					Projects
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/about" onClick={onClose}>
					About
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/contact" onClick={onClose}>
					Contact
				</NavLink>
			</li>
		</ul>
	);
};

export default NavbarList;