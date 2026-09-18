import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project: an unrelated package-lock.json
  // in the user's home directory would otherwise sometimes be auto-detected
  // as the monorepo root, which can confuse file tracing during the build.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
