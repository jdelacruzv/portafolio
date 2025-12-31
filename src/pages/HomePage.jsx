import Button from "../components/Button";
import Skills from "../components/Skills";
import style from "./HomePage.module.css";
import { icons } from "../utils/icons";

const showIcons = icons.map((icon) => <Skills key={icon.id} icon={icon.name}/>);

const HomePage = () => {
	return (
		<section className={style.home__container}>
			<figure className={style.home__photo}>
				<img
					className={style.home__img}
					src="/assets/images/jose.png"
					alt="Photo Jose"
          fetchpriority="high"
				/>
			</figure>
			<div className={style.home__data}>
				<h1 className={style.home__title}>
					<p className={style.home__title__white}>I am a</p>
					<p className={style.home__title__color}>Software developer</p>
					<p className={style.home__text}>
						Hi, my name is <span className={style.home__text__color}>JOSE </span>
						and I invite you to take a look at some of my projects.
					</p>
				</h1>
				<Button 
					text={"Projects"}	
					icon={"/assets/icons/next.png"} 
					path={"/projects"}
				/>
				<div className={style.home__icons}>{showIcons}</div>
			</div>
		</section>
	);
};

export default HomePage;