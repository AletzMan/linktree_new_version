/** @type {import('next').NextConfig} */
const nextConfig = {
    skipMiddlewareUrlNormalize: true,
    images: {
        domains: ['lh3.googleusercontent.com', 'zuddjmzjpnsfwykolabu.supabase.co'],
    },
}

module.exports = nextConfig
