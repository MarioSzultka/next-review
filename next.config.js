/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [{ hostname: "localhost", protocol: "http", port: "1337" }],
  },
};
