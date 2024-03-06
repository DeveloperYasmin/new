/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
      remotePatterns:[
          {
              protocol:"http",
              protocol:"https",
              hostname:"/w7.pngwing.com",
              hostname:"/render.fineartamerica.com",
              hostname:"/images.pexels.com"
          },
          
      ]
  }
};

export default nextConfig;