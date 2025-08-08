/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "utfs.io",
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sviet.org.in',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.sviet.ac.in',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
