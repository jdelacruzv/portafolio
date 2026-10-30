import style from "./Button.module.css";

const LinkButton = ({ text, icon, path }) => {
	return (
		<div className={style.btn__container}>
			<a
				className={`${style.btn__link} ${style.btn__link__small}`}
				href={path[0]}
				target="_blank"
				rel="noopener noreferrer"
			>
				{text[0]}
				<img className={style.btn__icon} src={icon[0]} alt="" aria-hidden="true" />
			</a>

			<a
				className={`
					${style.btn__link}
					${style.btn__link__small}
					${style.btn__link__ghost}
				`}
				href={path[1]}
				target="_blank"
				rel="noopener noreferrer"
			>
				{text[1]}
				<img className={style.btn__icon} src={icon[1]} alt="" aria-hidden="true" />
			</a>
		</div>
	);
};

export default LinkButton;
