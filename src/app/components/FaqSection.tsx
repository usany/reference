import { useState } from 'react';
import styles from '../root.module.css';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export default function FaqSection({ faqItems }: FaqSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                {item.q}
                <span className={`${styles.faqIcon} ${expandedFaq === index ? styles.expanded : ''}`}></span>
              </button>
              <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.open : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
