import style from "./SocialNetworks.module.css";

const SocialNetworks = () => {
	return (
		<div className={style.social}>
			<a
				className={style.social__link}
				href="https://twitter.com/jose_delacruz_v/"
				target="_blank"
			>
				<img
					className={style.social__img}
					src="assets/icons/twitter.png"
					alt="Logo twitter"
				/>
			</a>
			<a
				className={style.social__link}
				href="https://github.com/jdelacruzv"
				target="_blank"
			>
				<img
					className={style.social__img}
					src="assets/icons/github.png"
					alt="Logo github"
				/>
			</a>
			<a
				className={style.social__link}
				href="https://www.linkedin.com/in/jose-luis-de-la-cruz-vela/"
				target="_blank"
			>
				<img
					className={style.social__img}
					src="assets/icons/linkedin.png"
					alt="Logo linkedin"
				/>
			</a>
		</div>
	);
};

export default SocialNetworks;