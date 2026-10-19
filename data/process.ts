import { Compass, Target, Hammer, Rocket, LineChart } from "lucide-react";
import { Award, Palette, Cpu, PackageCheck, FileCheck2, LifeBuoy } from "lucide-react";
import type { Differentiator, ProcessStep } from "@/types";

/**
 * Homepage "How we work" process.
 */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    detail:
      "We start by understanding the business as it actually operates: the offer, the buyer, the economics and the constraints. This means interviews with the people doing the work, not just the person commissioning the project.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Strategize",
    detail:
      "Scope, approach and success metrics are defined in writing before production begins. You will know what is being delivered, what is deliberately excluded, and how the result will be measured.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create",
    detail:
      "Design and development happen in staged environments with regular previews. Nothing is held back until a final reveal. You see the work as it develops and can redirect early, when redirection is cheap.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch",
    detail:
      "Testing, deployment and implementation against a defined checklist: performance verified, accessibility reviewed, analytics confirmed, redirects mapped, and owners named for post-launch monitoring.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Optimize",
    detail:
      "Once live, results are measured against the goals agreed in strategy. Improvements are prioritised by evidence rather than opinion, and reported honestly, including when something did not work.",
    icon: LineChart,
  },
];

/**
 * Homepage "Why LN Digitech" differentiators.
 */
export const differentiators: Differentiator[] = [
  {
    title: "Marketing and technology under one roof",
    detail:
      "Strategy, creative, content and engineering sit in one team, so a campaign idea that needs a landing page, a tracking setup and a CRM integration does not get lost between three vendors.",
    icon: Award,
  },
  {
    title: "Creative and strategic thinking, together",
    detail:
      "Design decisions are made against a defined commercial objective. We will push back on visual ideas that look good in isolation but do not serve the goal you actually hired us for.",
    icon: Palette,
  },
  {
    title: "Modern AI-enabled workflows",
    detail:
      "We use AI tools where they genuinely improve speed or quality (research, production, testing) with human direction and disclosure. We do not ship unreviewed machine output and call it work.",
    icon: Cpu,
  },
  {
    title: "Tailored service packages",
    detail:
      "Packages give a starting shape, not a fixed box. Deliverables are agreed against your actual situation, and what is excluded is written down as clearly as what is included.",
    icon: PackageCheck,
  },
  {
    title: "Transparent scope and reporting",
    detail:
      "Every engagement has a written scope, defined deliverables and reporting you can verify. If something is slipping, you will hear it from us before you notice it yourself.",
    icon: FileCheck2,
  },
  {
    title: "Long-term technical support",
    detail:
      "Websites, apps and integrations need maintenance after launch. Support arrangements are offered and scoped properly, so what you build does not quietly decay.",
    icon: LifeBuoy,
  },
];
