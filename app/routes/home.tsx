import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

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
    </main>
  );
}
