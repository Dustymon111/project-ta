/** @type {import('next').NextConfig} */
const nextConfig = {
    images: 
        {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'via.placeholder.com',
                    port: '',
                    pathname: '/40',
                }
            ]
        }
    ,
};

export default nextConfig;
