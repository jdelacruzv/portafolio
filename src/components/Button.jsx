import { NavLink } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ text, icon}) => {
	return (
		<div className={style.btn__container}>
			<NavLink className={style.btn__link} to="/projects">
				{text} 
				<img 
					className={style.btn__icon}
					src={icon}
				/>
			</NavLink>
		</div>
	);
};

export default Button;