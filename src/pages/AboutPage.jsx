import style from "./AboutPage.module.css";

const AboutPage = () => {
	return (
		<section className={style.about__container}>
			<article className={style.aboutme__container}>
				<figure className={style.aboutme__photo}>
					<img
						className={style.aboutme__img}
						src="/assets/images/me3.jpeg"
						alt="Photo family"
					/>
				</figure>
				<div className={style.aboutme__texts}>
					<p className={style.aboutme__text}>
						I am a business administrator and technical professional in computer
						science with experience in the logistics area. I was born in Peru, I lived
						in Colombia for almost 4 years and since 2022 I have lived in Spain.
					</p>
					<p className={style.aboutme__text}>
						I consider myself self-taught and passionate about technology; In the
						middle of 2020 and in the midst of the global health crisis, I made the
						decision to change careers to learn web development.
					</p>
					<p className={style.aboutme__text}>
						I like to spend a lot of time sharing with my family, watching action
						movies, science fiction and documentaries. From time to time I enjoy
						cooking. 😉
					</p>
				</div>
			</article>
		</section>
	);
};

export default AboutPage;
