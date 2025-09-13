import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Next uses this project as the tracing root (prevents wrong root selection when multiple lockfiles exist)
  outputFileTracingRoot: path.join(process.cwd()),
  // Optional: speed up local rebuilds
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
