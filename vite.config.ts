import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    define: {
      "process.env.GITHUB_USERNAME": JSON.stringify(env.GITHUB_USERNAME ?? ""),
      "process.env.PORTFOLIO_NAME": JSON.stringify(env.PORTFOLIO_NAME ?? ""),
      "process.env.PORTFOLIO_EMAIL": JSON.stringify(env.PORTFOLIO_EMAIL ?? ""),
      "process.env.PORTFOLIO_PHONE": JSON.stringify(env.PORTFOLIO_PHONE ?? ""),
      "process.env.PORTFOLIO_LINKEDIN_URL": JSON.stringify(env.PORTFOLIO_LINKEDIN_URL ?? ""),
    },
  };
});
