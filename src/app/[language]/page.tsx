import { Translation } from '@/types/page';
import { notFound } from 'next/navigation';
import styles from '../root.module.css';
import RainAnimation from '@/components/RainAnimation';
import FaqSectionServer from '../FaqSectionServer';
import HeroSection from '../components/HeroSection';
import ButtonGroup from '../components/ButtonGroup';
import HeroVisual from '../components/HeroVisual';
import Footer from '../components/Footer';

export const translations: Record<string, Translation> = {
  ko: {
    title: '쿠우산 설명서',
    subtitle: '쿠우산 사용법을 알아보세요.',
    faq: {
      title: '자주 묻는 질문',
      q1: {
        question: '쿠우산이란 무엇인가요?',
        answer: '쿠우산은 문서를 효율적으로 생성, 관리 및 검색할 수 있도록 도와주는 고급 AI 기반 문서 플랫폼입니다. 누구나 서울, 국제, 광릉 캠퍼스에서 쿠우산을 이용할 수 있습니다.'
      },
      q2: {
        question: '계정은 어떻게 삭제할 수 있나요?',
        answer: '내 프로필 하단에서 계정 삭제를 진행할 수 있습니다.'
      },
      q3: {
        question: '서비스 개선에 대한 의견을 낼 수 있나요?',
        answer: '서비스 개선 사항을 ahncb@khu.ac.kr으로 보내주세요. 비판도 감사하게 받겠습니다.'
      },
    },
    policy: '개인정보처리방침'
  },
  en: {
    title: 'KHUSAN Instructions',
    subtitle: 'Learn how to use KHUSAN.',
    faq: {
      title: 'Frequently Asked Questions',
      q1: {
        question: 'What is KHUSAN?',
        answer: 'KHUSAN is an advanced AI-powered documentation platform that helps you create, manage, and search documentation efficiently.'
      },
      q2: {
        question: 'How can I delete my KHUSAN account?',
        answer: 'You can delete your account from the bottom of your profile.'
      },
      q3: {
        question: 'Can I share my service improvement opinions?',
        answer: 'Please send service improvement requests to ahncb@khu.ac.kr. Criticism is also appreciated.'
      }
    },
    policy: 'Privacy policy'
  }
};

export default async function LanguagePage({ params }: { params: { language: string } }) {
  const language = params.language;
  
  // Validate language
  if (!translations[language]) {
    notFound();
  }
    
  return (
    <>
      <RainAnimation />
      <HeroSection />
      <ButtonGroup />
      <section className={styles.heroContent}>
        <HeroVisual />
        <FaqSectionServer />
      </section>
      <Footer />
    </>
  );
}
