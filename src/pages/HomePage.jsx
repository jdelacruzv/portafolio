import Button from "../components/Button";
import style from "./HomePage.module.css";

const HomePage = () => {
	return (
		<section className={style.home}>
			<figure className={style.home__photo}>
				<img
					className={style.home__img}
					src="/assets/images/jose.jpg"
					alt="Photo Jose"
				/>
			</figure>
			<div className={style.home__data}>
				<h1 className={style.home__title}>
					<span>I am a</span>
					<br />
					<span className={style.home__title__color}>Web developer</span>
					<p className={style.home__text}>
						Hi, I'm <span className={style.home__text__color}>Jose </span> 
						and I invite you to take a look at some of my projects.
					</p>
				</h1>
				<Button text={"Projects"} icon={"/assets/icons/go.png"} />
			</div>
		</section>
	);
};

export default HomePage;