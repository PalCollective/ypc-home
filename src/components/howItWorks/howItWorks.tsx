import styles from "./howitworks.module.css"

const HowItWorks = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.pageContainer}>
			HOW IT WORKS
		</section>
	)
}

export default HowItWorks
