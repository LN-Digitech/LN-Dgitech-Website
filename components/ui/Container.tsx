import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Renders a custom element (e.g. "section", "main", "nav"). */
  as?: ElementType;
  /** Use the wider container for image-heavy layouts. */
  wide?: boolean;
}

/**
 * Page-width container. Applies consistent horizontal padding and centres
 * content at the design-system container width.
 */
export function Container({ children, className, as: Tag = "div", wide }: ContainerProps) {
  return (
    <Tag className={cn(styles.container, wide && styles.wide, className)}>{children}</Tag>
  );
}
