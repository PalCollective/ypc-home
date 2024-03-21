import About from "@/components/about/About"

import styles from "../global/home.module.css"
import HowItWorks from "@/components/howItWorks/howItWorks"

export default function Home() {
	return (
		<main className={styles.homeContainer}>
			<div className={styles.headerSection}>
				<div className={styles.logoContainer}></div>
				<div className={styles.headerContainer}>
					<h1 className={styles.headerText}>
						Hope in times of crisis:
						<br />
						Connecting Gaza with the World
					</h1>
					<h2 className={styles.subHeaderText}>
						PalCollective is building bridges of humanity, one connection at a
						time.
					</h2>
					{/* <div className={styles.buttonContainer}>
						<button className={styles.homePageButton}>
							<p>
								Our Mission <br />
								<span className={styles.buttonSubText}>
									Learn About PalCollective
								</span>
							</p>
						</button>
						<button className={styles.homePageButton}>
							<p>
								Become a Volunteer <br />
								<span className={styles.buttonSubText}>Share Your Skills</span>
							</p>
						</button>
						<button className={styles.homePageButton}>
							<p>
								Donate <br />
								<span className={styles.buttonSubText}>
									Help Us Amplify Humanity
								</span>
							</p>
						</button>
					</div> */}
				</div>
			</div>
			<div className={styles.heroImage}></div>
			<About id="about" />
			{/* <HowItWorks id="how-it-works" /> */}
		</main>
	)
}
