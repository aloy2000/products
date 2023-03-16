/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  },
  
}

module.exports = nextConfig
