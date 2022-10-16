import Button from "../components/Button";
import style from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<form
			className={style.contact__form}
			name="contact"
			method="POST"
			netlify-honeypot="bot-field"
			data-netlify="true"
		>
			<div className={style.contact__container}>
				{/* Campo honeypot (tarro de miel) para evitar los bots de spam */}
				<div className={style.hidden}>
					<label>
						Don’t fill this out if you’re human:
						<input name="bot-field" />
					</label>
				</div>
				<div className={style.contact__group}>
					<input type="text" name="name" id="name" required />
					<span className={style.contact__bar}></span>
					<label htmlFor="">Name</label>
				</div>
				<div className={style.contact__group}>
					<input type="email" name="email" id="email" required />
					<span className={style.contact__bar}></span>
					<label htmlFor="">Email</label>
				</div>
				<div className={style.contact__group}>
					<textarea name="subject" id="subject" required></textarea>
					<span className={style.contact__bar}></span>
					<label htmlFor="">Subject</label>
				</div>
				<Button text={"Submit"} icon={"/assets/icons/mail.png"} path={"/contact"} />
			</div>
		</form>
	);
};

export default ContactForm;
