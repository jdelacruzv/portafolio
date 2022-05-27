import style from "./NavbarList.module.css";

const NavbarList = ({ showMenuList }) => {
	const menuList = showMenuList
		? `${style.navbar__list} ${style.show__navbar}`
		: style.navbar__list;

	return (
		<ul className={menuList}>
			<li className={style.navbar__item}>
				<a className={style.navbar__link} href="#">
					Home
				</a>
			</li>
			<li className={style.navbar__item}>
				<a className={style.navbar__link} href="#projects">
					Projects
				</a>
			</li>
			<li className={style.navbar__item}>
				<a className={style.navbar__link} href="#about">
					About
				</a>
			</li>
			<li className={style.navbar__item}>
				<a className={style.navbar__link} href="#jobs">
					Jobs
				</a>
			</li>
			<li className={style.navbar__item}>
				<a className={style.navbar__link} href="#contact">
					Contact
				</a>
			</li>
		</ul>
	);
};

export default NavbarList;