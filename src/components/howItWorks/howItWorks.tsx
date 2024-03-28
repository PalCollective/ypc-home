import styles from "./howitworks.module.css"

const HowItWorks = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.pageContainer}>
			<div className={styles.contentSection}>
				<h2 className={styles.headerText}>How it works</h2>

				<div className={styles.verticalContainer}>
					<div className={styles.horizontalContainer}>
						<div className={styles.stepImage}>
							<img src="/HowItWorks1.svg" />
						</div>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>Step 1</p>

							<p className={styles.detailText}>
								People that need help in Gaza will connect to our service and
								ask for help.
							</p>
							<br />
							<p className={styles.detailText}>
								Volunteers that are able to deliver the help will receive the
								request and offer their time and skills to help
							</p>
						</div>
					</div>
					<div className={styles.horizontalContainer}>
						<div className={styles.stepImage}>
							<img src="/HowItWorks2.svg" />
						</div>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>Step 2</p>

							<p className={styles.detailText}>
								Both people in Gaza and volunteers go through a verification
								process, with the aim to protect everyone’s privacy and consent.
							</p>
						</div>
					</div>
					<div className={styles.horizontalContainer}>
						<div className={styles.stepImage}>
							<img src="/HowItWorks3.svg" />
						</div>
						<div className={styles.textContainer}>
							<p className={styles.stepText}>Step 3</p>

							<p className={styles.detailText}>
								Once people in Gaza have sent a request, our service will match
								their request to a volunteer that can help them with it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
