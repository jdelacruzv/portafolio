import LinkButton from "./LinkButton";
import style from "./Project.module.css";

const Project = ({ title, image, text, pathDemo, pathCode }) => {
	return (
		<figure className={style.project__box}>
			<p className={style.project__title}>{title}</p>
			<img className={style.project__img} src={image} alt={title} />
			<p className={style.project__text}>{text}</p>
			<LinkButton
				text={["Demo", "Code"]}
				icon={["/assets/icons/link.png", "/assets/icons/code.png"]}
				path={[`${pathDemo}`, `${pathCode}`]}
			/>
		</figure>
	);
};

export default Project;