import SocialNetworks from "../components/SocialNetworks";
import style from "./ContactPage.module.css";

const ContactPage = () => {
	return (
		<section className={style.contact__container}>
			<div className={style.contact__content}>
				<p className={style.contact__eyebrow}>CONTACT</p>
				<h1 className={style.contact__title}>Let's connect.</h1>
				<p className={style.contact__intro}>
					For opportunities, collaborations, or questions, send me an email.
				</p>
				<a className={style.contact__email} href="mailto:jldlcv@gmail.com">
					jldlcv@gmail.com
				</a>
				<div className={style.contact__social}>
					<h2 className={style.contact__socialTitle}>Or find me on</h2>
					<SocialNetworks />
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
