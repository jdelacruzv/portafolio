import SocialNetworks from "../components/SocialNetworks";
import style from "./ContactPage.module.css";

const ContactPage = () => {
	return (
		<section className={style.contact_container}>
			<div className={style.contact__intro}>
				<h2 className={style.contact__title}>Contact me</h2>
				<p className={style.contact__text}>Email :</p>
				<div className={style.contact__email}>
					<p className={style.contact__email__text}>jldlcv @ gmail . com</p>
				</div>
				<p className={style.contact__text}>Social media accounts :</p>
				<SocialNetworks />
			</div>
			<figure className={style.contact__phone}>
				<img
					className={style.contact__phone__img}
					src="/assets/images/contact.png"
					alt="Photo Jose"
				/>
			</figure>
		</section>
	);
};

export default ContactPage;
