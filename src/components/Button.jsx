import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ text, icon, path }) => {
	return (
		<div className={style.btn__container}>
			{
				path === "/projects" 
				? <Link className={style.btn__link} to={path}>
						{text}
						<img className={style.btn__icon} src={icon} />
					</Link>
				: <a className={style.btn__link} href={path} target="_blank">
						{text}
						<img className={style.btn__icon} src={icon} />
					</a>
			}
		</div>
	);
};

export default Button;