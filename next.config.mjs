/** @type {import('next').NextConfig} */
import path from "path"
// const path = require("path")

const nextConfig = {
    basePath: "/ypc-home",
    assetPrefix: "/ypc-home",
	output: "export",
	// sassOptions: {
	// 	includePaths: [path.join(__dirname, "src", "styles")],
	// 	prependData: `@import "modulePrepend.scss`,
	// },
}
export default nextConfig
