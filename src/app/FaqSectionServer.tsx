import styles from './root.module.css';
import { getLanguage } from './hooks/useServerTheme';

export const translations = {
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
  },
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
  }
};

export default async function FaqSectionServer() {
  const language = await getLanguage();
  const faqItems = Object.values(translations[language].faq).filter(item => typeof item === 'object');
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => {
            return (
            <div key={index} className={styles.faqItem}>
              <details className={styles.faqDetails}>
                <summary className={styles.faqQuestion}>
                  {item.question}
                </summary>
                <div className={styles.faqAnswer}>
                  {item.answer}
                </div>
              </details>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
