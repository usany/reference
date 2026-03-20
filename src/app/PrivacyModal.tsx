'use client';

import styles from './root.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

interface PrivacyModalProps {
  translation: {
    policy: string;
  };
  method: React.ReactNode;
}

export default function PrivacyModal({ translation, method }: PrivacyModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams.get('privacy') === 'true';

  const closeModal = () => {
    router.push(window.location.pathname);
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{translation.policy}</h2>
          <button 
            className={styles.closeButton}
            onClick={closeModal}
          >
            x
          </button>
        </div>
        <div className={styles.modalBody}>
          {method}
        </div>
      </div>
    </div>
  );
}
