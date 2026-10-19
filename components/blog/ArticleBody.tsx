import styles from "./ArticleBody.module.css";
import type { ArticleBlock } from "@/types";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
}

/**
 * Safe renderer for validated article blocks.
 *
 * Content lives in data/blog.ts as typed blocks, there is no HTML injection
 * surface and no dangerouslySetInnerHTML for article content.
 */
export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className={styles.article}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} className={styles.h2}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className={styles.h3}>
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={index} className={styles.p}>
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className={styles.ul}>
                {block.items.map((item) => (
                  <li key={item} className={styles.li}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className={styles.ol}>
                {block.items.map((item) => (
                  <li key={item} className={styles.li}>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={index} className={styles.quote}>
                <p className={styles.quoteText}>{block.text}</p>
                {block.attribution ? (
                  <cite className={styles.attribution}>{block.attribution}</cite>
                ) : null}
              </blockquote>
            );
          case "note":
            return (
              <aside key={index} className={styles.note} aria-label="Note">
                <p className={styles.noteText}>{block.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
