"use client"
import About from "@/components/about/About"
import styles from "./home.module.css"
import HowItWorks from "@/components/howItWorks/howItWorks"
import ContactUs from "@/components/contact/contact"
import { useState } from "react"

export default function Home() {
	const [isDropdownShowing, setDropdown] = useState()
	return (
		<main className={styles.homeContainer}>
			<nav className={styles.globalNav}>
				<ul className={styles.siteNav}>
					<li className={styles.home}>
						<a href="/">
							<img src="Symbol.svg" />
						</a>
					</li>
					<li>
						<a className={styles.linkText} href="#about">
							About
						</a>
					</li>
					<li>
						<a className={styles.linkText} href="#how-it-works">
							How it works
						</a>
					</li>
					{/*<li>
							<a className="linkText">Impact</a>
						</li>
						<li>
							<a className="linkText">Get involved</a>
						</li>
						<li>
							<a className="linkText">FAQs</a>
						</li>*/}
					<li>
						<a className={styles.linkText} href="#contact-us">
							Contact us
						</a>
					</li>
					{/*<li>
							<a className="linkText">Donate</a>
						</li> 
						{/* </ul>
					<ul className="iconNav">
						<li>
							<button>
								{/* Search
								<img src="/search.svg" />
							</button>
						</li>
						<li>
							<button>
								<img src="/globe.svg" />
							</button>
						</li> */}
				</ul>
			</nav>
			<div className={styles.headerSection}>
				<div className={styles.logoContainer}></div>
				<div className={styles.headerContainer}>
					<h1 className={styles.headerText}>
						<span className={styles.headerChange}>Hope</span> in times of
						crisis:
						<br />
						connecting Gaza with the World
					</h1>
					<h2 className={styles.subHeaderText}>
						PalCollective is building bridges of humanity, one connection at a
						time.
					</h2>
					{/* <div className={styles.buttonContainer}>
						<button className={styles.homePageButton}>
							<p>
								Our Mission <br />
							 
							</p>
						</button>
						<button className={styles.homePageButton}>
							<p>
								Become a Volunteer <br />
 							</p>
						</button>
						<button className={styles.homePageButton}>
							<p>
								Donate <br />
								 
							</p>
						</button>
					</div> */}
				</div>
			</div>
			<div className={styles.heroImage}></div>
			<About id="about" />
			<HowItWorks id="how-it-works" />
			<ContactUs id="contact-us" />
		</main>
	)
}
