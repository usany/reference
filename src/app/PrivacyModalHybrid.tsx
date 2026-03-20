'use client';

import styles from './root.module.css';
import { useEffect, useState } from 'react';

interface PrivacyModalProps {
  translation: {
    policy: string;
  };
  method: React.ReactNode;
  initialOpen?: boolean;
}

export default function PrivacyModalHybrid({ translation, method, initialOpen = false }: PrivacyModalProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{translation.policy}</h2>
          <button 
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
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
