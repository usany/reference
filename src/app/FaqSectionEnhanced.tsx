'use client';

import styles from './root.module.css';
import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export default function FaqSectionEnhanced({ faqItems }: FaqSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleItem(index)}
                aria-expanded={expandedItems.has(index)}
              >
                {item.q}
                <span className={`${styles.faqIcon} ${expandedItems.has(index) ? styles.expanded : ''}`}></span>
              </button>
              <div className={`${styles.faqAnswer} ${expandedItems.has(index) ? styles.open : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
