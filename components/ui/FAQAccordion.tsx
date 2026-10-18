"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQAccordion.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Allow multiple panels open at once. Default: single-open. */
  allowMultiple?: boolean;
  className?: string;
}

/**
 * Accessible accordion built on native <button> controls with
 * aria-expanded / aria-controls. Fully keyboard operable; panels are always
 * in the DOM so content remains available to assistive technology.
 */
export function FAQAccordion({ items, allowMultiple = false, className }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className={`${styles.accordion} ${className ?? ""}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question} className={styles.item} data-open={isOpen || undefined}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <ChevronDown className={styles.chevron} aria-hidden="true" size={20} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
