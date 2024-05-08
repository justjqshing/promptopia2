/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
      
    },
    images: {
      dangerouslyAllowSVG: true,
      domains: ['lh3.googleusercontent.com', 'ui-avatars.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  export default nextConfig