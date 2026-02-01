import SocialNetworks from "../components/SocialNetworks";
import style from "./ContactPage.module.css";

const ContactPage = () => {
	return (
		<section className={style.contact_container}>
			<h2 className={style.contact__title}>Contact me</h2>
			<div className={style.contact__email}>
				<p>jldlcv @ gmail . com</p>
			</div>
			<p>Social media accounts :</p>
			<SocialNetworks />
		</section>
	);
};

export default ContactPage;