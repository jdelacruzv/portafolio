import style from "./Skills.module.css";

const Skills = ({ icon }) => {
	return (
		<figure className={style.container__skill}>
			<img
				className={style.icon__skill}
				src={`/assets/icons/skills/${icon}.svg`}
				alt={`${icon} icon`}
			/>
		</figure>
	);
};

export default Skills;
