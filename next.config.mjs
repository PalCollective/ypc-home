/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	sassOptions: {
		includePaths: [path.join(__dirname, "src", "styles")],
		prependData: `@import "_modulePrepend.scss"`,
	},
}
export default nextConfig
