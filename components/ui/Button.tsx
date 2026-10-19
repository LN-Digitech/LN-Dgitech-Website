import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

type LinkProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

export type ButtonProps = LinkProps | NativeButtonProps;

function classesFor(props: ButtonProps): string {
  return cn(
    styles.button,
    styles[props.variant ?? "primary"],
    styles[props.size ?? "md"],
    props.fullWidth && styles.fullWidth,
    props.className,
  );
}

/**
 * Shared button/link component.
 *
 * Renders a Next.js <Link> when `href` is provided, otherwise a native
 * <button>. Use `loading` for submission states, the label stays visible so
 * the control does not resize.
 */
export function Button(props: ButtonProps) {
  const className = classesFor(props);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={className}>
        <span className={styles.label}>{props.children}</span>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={cn(className, props.loading && styles.loading)}
      disabled={props.disabled || props.loading}
      onClick={props.onClick}
      aria-busy={props.loading || undefined}
    >
      <span className={styles.label}>{props.children}</span>
    </button>
  );
}
