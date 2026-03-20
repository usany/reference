import styles from './root.module.css';

interface PrivacyModalProps {
  translation: {
    policy: string;
  };
  method: React.ReactNode;
  isOpen: boolean;
}

export default function PrivacyModalTrueServer({ translation, method, isOpen }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{translation.policy}</h2>
          <a href="#" className={styles.closeButton}>
            x
          </a>
        </div>
        <div className={styles.modalBody}>
          {method}
        </div>
      </div>
    </div>
  );
}
