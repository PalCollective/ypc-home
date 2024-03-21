import styles from "./howitworks.module.css"

const HowItWorks = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.pageContainer}>
			<div className={styles.contentSection}>
				<h2 className={styles.headerText}>How it works</h2>
				<h3 className={styles.subHeaderText}>
					Connecting People, Transforming Lives: A Simple 3-Step Process
				</h3>
				<div className={styles.verticalContainer}>
					<div className={styles.horizontalContainer}>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>People in Gaza connect</p>

							<p className={styles.detailText}>
								People in need connect securely via WhatsApp.{" "}
							</p>
						</div>
						{/* <div className={styles.imageContainer}>Img</div> */}
					</div>
					<div className={styles.horizontalContainer}>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>Verification Process</p>

							<p className={styles.detailText}>
								A verification process ensures safety and trust
							</p>
						</div>
						{/* <div className={styles.imageContainer}>Img</div> */}
					</div>
					<div className={styles.horizontalContainer}>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>
								We’ll find you someone to support you
							</p>

							<p className={styles.detailText}>
								You are matched with someone who can support you
							</p>
						</div>
						{/* <div className={styles.imageContainer}>Img</div> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
