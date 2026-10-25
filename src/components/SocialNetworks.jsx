import style from "./SocialNetworks.module.css";

const SocialNetworks = () => {
	return (
		<div className={style.social}>
			<a
				className={style.social__link}
				href="https://www.linkedin.com/in/jose-luis-de-la-cruz-vela/"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={style.social__img}
					src="/assets/icons/linkedin.png"
					alt=""
				/>
				<span>LinkedIn</span>
			</a>
			<a
				className={style.social__link}
				href="https://github.com/jdelacruzv"
				target="_blank"
				rel="noreferrer"
			>
				<img className={style.social__img} src="/assets/icons/github.png" alt="" />
				<span>GitHub</span>
			</a>
			<a
				className={style.social__link}
				href="https://x.com/jose_delacruz_v/"
				target="_blank"
				rel="noreferrer"
			>
				<img className={style.social__img} src="/assets/icons/x.png" alt="" />
				<span>X/Twitter</span>
			</a>
		</div>
	);
};

export default SocialNetworks;
