/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `
      @use "@/styles/_function.scss" as *;
      @use "@/styles/_variables.scss" as *;
    `,
  },
};

module.exports = nextConfig;
