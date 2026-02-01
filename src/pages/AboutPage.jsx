import style from "./AboutPage.module.css";

const AboutPage = () => {
	return (
		<section className={style.about__container}>
			<figure className={style.about__photo}>
				<img
					className={style.about__img}
					src="/assets/images/jose.png"
					alt="Photo Jose"
					fetchpriority="high"
				/>
			</figure>
			<div className={style.about__data}>
				<p className={style.about__text}>
					I am a business administrator and technical professional in computer
					science with experience in the logistics area. I was born in Peru, I lived
					in Colombia for almost 4 years and since 2022 I have lived in Spain.
				</p>
				<p className={style.about__text}>
					I consider myself self-taught and passionate about technology; In the
					middle of 2020 and in the midst of the global health crisis, I made the
					decision to change careers to learn web software development (fullstack).
				</p>
			</div>
		</section>
	);
};

export default AboutPage;