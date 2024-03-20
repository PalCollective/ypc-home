import styles from "./about.module.css"

const About = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.aboutPageContainer}>
			<div className={styles.titleLogoContainer}>
				<h2 className={styles.headerText}>Our Story</h2>
				<p className={styles.subHeaderText}>
					Inspired by humanity, fueled by action
				</p>
			</div>
			<div className={styles.textContainer}>
				<p>
					We came up with the idea to invite doctors, social workers and people
					who are good at giving moral support, to offer mutual aid online to
					people in Gaza. Since his initial social media post, over 5000 people
					have shown interest.  Of those, around 50 people have come together to
					organize the community and create a person-to-person app, which will
					be ready soon.
				</p>{" "}
				<br />
				<p>
					What you’re seeing on this site is the product of these people
					collaborating for a common goal: proof that collective efforts yield
					results… and quickly!{" "}
				</p>
				<br />
				<p>
					Our mission is to facilitate peer-to-peer communication, support,
					advice, and friendship across our global community through basic and
					accessible technology.
				</p>
				<br />
				<p>
					{" "}
					PalCollective envisions a world where people are not in
					life-threatening situations at the hands of oppressive regimes. Simply
					put, we believe in a #FreePalestine{" "}
				</p>
				<br />
				<p>
					Until that day, we envision a way for people in these dire situations
					to quickly and easily solicit the type of help they need.
					Simultaneously, people around the world volunteer their time,
					friendship, and professional expertise to support to the best of their
					ability. 
				</p>
			</div>

			{/* <div className="flex flex-col md:flex-row w-full py-10 px-10">
				<div className="h-56 w-full md:w-1/3 flex justify-center items-center bg-logo bg-cover bg-center"></div>
				<div className=" h-56   w-full md:w-2/3 flex flex-col justify-between">
					<h1 className="font-bold text-3xl">
						Hope in times of crisis: Connecting Gaza with the World
					</h1>
					<h2 className="font-bold text-xl hidden md:flex">
						PalCollective is building bridges of humanity, one connection at a
						time.
					</h2>
					<div className=" w-full flex justify-between">
						<button className=" border py-4 px-8 rounded-md bg-green-700 text-neutral-50">
							<p className="font-bold">
								Our Mission <br />
							</p>
							Learn About PalCollective
						</button>
						<button className=" border py-4 px-8 rounded-md bg-green-700 text-neutral-50">
							<p className="font-bold">
								Become a Volunteer <br />
							</p>
							Share Your Skills
						</button>
						<button className=" border py-4 px-8 rounded-md bg-green-700 text-neutral-50">
							<p className="font-bold">
								Donate <br />
							</p>
							Help Us Amplify Humanity
						</button>
					</div>
				</div>
			</div>
			<div className="w-full md:bg-hero h-96 bg-center bg-cover sm:bg-none "></div> */}
		</section>
	)
}

export default About
