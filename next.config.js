/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
});
module.exports = withPWA(nextConfig); 