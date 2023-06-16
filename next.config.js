/** @type {import('next').NextConfig} */
const nextConfig = {
    skipMiddlewareUrlNormalize: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig
