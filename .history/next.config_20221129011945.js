/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
images: {
  domains: ["links.papareact.com","www.jsonkeeper.com"]
}
const withTM = requir('next-transpile-modules') (['date-fns']);
module.exports = withTM(nextConfig)

module.exports = nextConfig
