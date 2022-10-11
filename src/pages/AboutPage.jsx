import style from "./AboutPage.module.css";

const AboutPage = () => {
	return (
		<section className={style.about__container}>
			<figure className={style.about__photo}>
				<img
					className={style.about__img}
					src="/assets/images/family.png"
					alt="Photo family"
				/>
			</figure>
			<div className={style.about__texts}>
				<p className={style.about__text}>
					Soy administrador de empresas y profesional técnico en computación e
					informática con experiencia en el área de logística. Nací en Perú, viví y
					actualmente resido en Colombia.
				</p>
				<p className={style.about__text}>
					Me considero autodidacta y apasionada de la tecnología; a mediados del 2020
					y en medio de la crisis sanitaria, tomé la decisión de cambiar de carrera
					para aprender desarrollo web.
				</p>
				<p className={style.about__text}>
					Me gusta pasar mucho tiempo compartiendo con mi familia, viendo películas
					de acción, ciencia ficción y documentales; de vez en cuando disfruto
					cocinar. 😉
				</p>
			</div>
		</section>
	);
};

export default AboutPage;
