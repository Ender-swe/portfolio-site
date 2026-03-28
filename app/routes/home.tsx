import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Personal portfolio site." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
