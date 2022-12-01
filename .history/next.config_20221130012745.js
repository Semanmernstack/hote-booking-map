/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["www.jsonkeeper.com"],
  },
  env: {
    mapbox_keys: "pk.eyJ1Ijoic2VtYW5tZXJuc3RhY2siLCJhIjoiY2w5OGFxdHF5MGV2ajNvcW1kczl4OTZoNiJ9.SdcjduguqNHQEKyusGHAUw"
  }

  
}


  


module.exports = nextConfig
