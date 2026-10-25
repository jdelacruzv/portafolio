import style from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<p className={style.footer__text}>
				© {new Date().getFullYear()} Jose De La Cruz. Todos los derechos reservados.
			</p>
		</footer>
	);
};

export default Footer;
