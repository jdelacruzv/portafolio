import style from "./Button.module.css";

const LinkButton = ({ text, icon, path }) => {
	return (
		<div className={style.btn__container}>
			<a
				className={`
					${style.btn__link} 
					${style.btn__link__small}
				`}
				href={path[0]}
				target="_blank"
			>
				{text[0]}
				<img className={style.btn__icon} src={icon[0]} />
			</a>
			<a
				className={`
					${style.btn__link} 
					${style.btn__link__small}
					${style.btn__link__ghost}
				`}
				href={path[1]}
				target="_blank"
			>
				{text[1]}
				<img className={style.btn__icon} src={icon[1]} />
			</a>
		</div>
	);
};

export default LinkButton;
