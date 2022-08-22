import { NavLink } from "react-router-dom";
import style from "./NavbarList.module.css";

const NavbarList = ({ showMenuList }) => {
	const menuList = showMenuList
		? `${style.navbar__list} ${style.show__navbar}`
		: style.navbar__list;

	return (
		<ul className={menuList}>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/">
					Home
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/projects">
					Projects
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/about">
					About
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/jobs">
					Jobs
				</NavLink>
			</li>
			<li className={style.navbar__item}>
				<NavLink className={style.navbar__link} to="/contact">
					Contact
				</NavLink>
			</li>
		</ul>
	);
};

export default NavbarList;