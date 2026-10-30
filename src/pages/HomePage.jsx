import Button from "../components/Button";
import Skills from "../components/Skills";
import { icons } from "../utils/icons";
import style from "./HomePage.module.css";

const showIcons = icons.map((icon) => (
	<Skills key={icon.id} icon={icon.name} />
));

const HomePage = () => {
	return (
		<section className={style.home__container}>
			<figure className={style.home__photo}>
				<img
					className={style.home__img}
					src="/assets/images/jose.png"
					alt="Jose De La Cruz"
					width="436"
					height="512"
					loading="eager"
					fetchPriority="high"
				/>
			</figure>
			<h1 className={style.home__title}>Software Developer</h1>
			<Button
				text={"Projects"}
				icon={"/assets/icons/next.png"}
				path={"/projects"}
			/>
			<div className={style.home__icons}>{showIcons}</div>
		</section>
	);
};

export default HomePage;
