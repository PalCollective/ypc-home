import styles from "./contact.module.css"

const ContactUs = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.pageContainer}>
			<div className={styles.logoContainer}>
				<h3 className={styles.headerText}>Contact Us</h3>
				<br />
				<a href="mailto:info@palcollective.com" className={styles.emailText}>
					info@palcollective.com
				</a>
			</div>
		</section>
	)
}

export default ContactUs
