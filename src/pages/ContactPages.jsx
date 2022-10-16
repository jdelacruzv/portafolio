import ContactForm from "../components/ContactForm";
import SocialNetworks from "../components/SocialNetworks";
import style from "./ContactPage.module.css";

const ContactPage = () => {
	return (
		<section className={style.contact}>
			<div className={style.contact__intro}>
				<h2 className={style.contact__title}>Get in touch with me</h2>
				<p className={style.contact__text}>
					You can find me on Twitter for a chat or LinkedIn for something a bit more
					professional. Come say hello, I’d love to hear from you.
				</p>
				<p className={style.contact__text}>
					If you have a role you would like to discuss or a general enquiry please
					complete the form.
				</p>
				<SocialNetworks />
			</div>
			<ContactForm />
		</section>
	);
};

export default ContactPage;
