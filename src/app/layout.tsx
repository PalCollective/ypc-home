import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Your Pal Collective",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&family=EB+Garamond&family=Questrial&family=Quicksand&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<nav className="globalNav">
					<ul className="siteNav">
						<li className="home">
							<a href="/">
								<img src="Symbol.svg" />
							</a>
						</li>
						<li>
							<a className="linkText" href="#about">
								About PalCollective
							</a>
						</li>
						{/* <li>
							<a className="linkText">How it works</a>
						</li>
						<li>
							<a className="linkText">Impact</a>
						</li>
						<li>
							<a className="linkText">Get involved</a>
						</li>
						<li>
							<a className="linkText">FAQs</a>
						</li>
						<li>
							<a className="linkText">Contact us</a>
						</li>
						<li>
							<a className="linkText">Donate</a>
						</li> */}
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
				{children}
			</body>
		</html>
	)
}
