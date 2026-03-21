export interface Translation {
  title: string;
  subtitle: string;
  faq: {
    title: string;
    q1: {
      question: string;
      answer: string;
    };
    q2: {
      question: string;
      answer: string;
    };
    q3: {
      question: string;
      answer: string;
    };
  };
  policy: string;
}

export interface PageProps {
  translation: Translation;
  language: 'en' | 'ko';
  privacyContent: React.ReactNode;
}
