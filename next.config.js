/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `
      @use "@/styles/_function.scss" as *;
      @use "@/styles/_variables.scss" as *;
      @use "@/styles/_extends.scss" as *;
    `,
  },
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
