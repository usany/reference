import { translations } from '@/FaqSectionServer';
import styles from '../root.module.css';
import { getLanguage } from '@/hooks/useServerTheme';

export default async function HeroSection() {
  const language = await getLanguage();
  const title = translations[language].title;
  const subtitle = translations[language].subtitle;
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
    </section>
  );
}
