import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
 
        remotePatterns: [
            {
                protocol: 'https',
           
                hostname: 'placehold.co', 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                 hostname: 'cdn.prod.website-files.com', 
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;