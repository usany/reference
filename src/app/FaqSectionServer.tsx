import styles from './root.module.css';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export default function FaqSectionServer({ faqItems }: FaqSectionProps) {
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <details className={styles.faqDetails}>
                <summary className={styles.faqQuestion}>
                  {item.q}
                </summary>
                <div className={styles.faqAnswer}>
                  {item.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
