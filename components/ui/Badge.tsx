import type { ReactNode } from "react";
import styles from "./Badge.module.css";
import { cn } from "@/lib/utils";

type BadgeTone = "blue" | "cyan" | "navy" | "neutral" | "warning";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/**
 * Compact label used for categories, package names and status markers.
 * Never uses colour alone to communicate meaning — text is always present.
 */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return <span className={cn(styles.badge, styles[tone], className)}>{children}</span>;
}
