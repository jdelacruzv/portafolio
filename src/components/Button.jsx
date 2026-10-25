import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ text, icon, path, outline = false }) => {
	return (
		<div className={style.btn__container}>
			{path === "/projects" ? (
				<Link
					className={`${style.btn__link} ${style.btn__link__outline}`}
					to={path}
				>
					{text}
					<img className={style.btn__icon} src={icon} />
				</Link>
			) : (
				<a
					className={
						outline
							? `${style.btn__link} ${style.btn__link__outline}`
							: style.btn__link
					}
					href={path}
					target="_blank"
				>
					{text}
					<img className={style.btn__icon} src={icon} />
				</a>
			)}
		</div>
	);
};

export default Button;
