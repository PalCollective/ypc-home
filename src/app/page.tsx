import Image from "next/image"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between  bg-white text-black">
			<div className="flex flex-col md:flex-row w-full py-10 px-10">
				<div className="h-64 w-full md:w-1/3 flex justify-center items-center">
					<img src="Logo.svg" alt="" className="h-full w-full" />
				</div>
				<div className="  h-64 w-full md:w-2/3 flex flex-col justify-center">
					<h1 className="font-bold text-3xl">
						Hope in times of crisis: Connecting Gaza with the World
					</h1>
					<h2 className="font-bold text-xl hidden md:flex">
						PalCollective is building bridges of humanity, one connection at a
						time.
					</h2>
				</div>
			</div>
			<div className="w-full md:bg-hero h-96 bg-center bg-cover sm:bg-none "></div>
		</main>
	)
}
