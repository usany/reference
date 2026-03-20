import styles from '../root.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
    </section>
  );
}
