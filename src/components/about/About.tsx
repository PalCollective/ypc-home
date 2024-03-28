import styles from "./about.module.css"

const About = (props: { id: string }) => {
	return (
		<section id={props.id} className={styles.pageContainer}>
			<div className={styles.titleTextContainer}>
				<h2 className={styles.headerText}>Our Story</h2>
				<h3 className={styles.subHeaderText}>
					Inspired by humanity, driven by action
				</h3>
				<p>
					We came up with the idea to invite doctors, social workers and people
					who are good at giving moral support, to offer mutual aid online to
					people in Gaza. Since the initial social media post, over 5000 people
					have shown interest. Of those, around 50 people have come together to
					organize the community and create a person-to-person app, which will
					be ready soon.
				</p>{" "}
				<br />
				<p>
					This website showcases the collaborative efforts of these individuals,
					highlighting the effectiveness of collective action.
				</p>
				<br />
				<p>
					Our mission: facilitate global peer-to-peer communication, support,
					advice, and friendship through accessible technology.
				</p>
				<br />
				<p>
					PalCollective advocates for a world free from oppressive regimes,
					supporting #FreePalestine.
				</p>
				<br />
				<p>
					Meanwhile, we offer swift assistance to those in need while volunteers
					worldwide provide their time, companionship, and professional
					expertise.
				</p>
			</div>
			<div className={styles.imageContainer}>
				<div className={styles.image} />
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
