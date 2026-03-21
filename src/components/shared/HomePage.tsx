import styles from '../../app/root.module.css';
import links from 'links';
import RainAnimation from '@/components/RainAnimation';
import FaqSectionServer from '../../app/FaqSectionServer';
import HeroSection from '../../app/components/HeroSection';
import ButtonGroup from '../../app/components/ButtonGroup';
import HeroVisual from '../../app/components/HeroVisual';
import Footer from '../../app/components/Footer';
import { PageProps } from '@/types/page';

export default function HomePage({ translation, language, privacyContent }: PageProps) {
  return (
    <>
      <RainAnimation />
      <HeroSection title={translation.title} subtitle={translation.subtitle} />
      <ButtonGroup links={links} language={language} />
      <section className={styles.heroContent}>
        <HeroVisual />
        <FaqSectionServer />
      </section>
      <Footer policyText={translation.policy} privacyContent={privacyContent} />
    </>
  );
}
