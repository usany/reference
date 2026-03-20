'use client'
import { useState } from 'react';
import styles from '../root.module.css';

interface FooterProps {
  policyText: string;
  privacyContent: React.ReactNode;
}

export default function Footer({ policyText, privacyContent }: FooterProps) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <footer>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 KHUSAN.</p>
          <button 
            className={styles.privacyLink}
            onClick={() => setShowPrivacyModal(true)} 
          >
            {policyText}
          </button>
        </div>
      </footer>
      
      {showPrivacyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowPrivacyModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{policyText}</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setShowPrivacyModal(false)}
              >
                x
              </button>
            </div>
            <div className={styles.modalBody}>
              {privacyContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
