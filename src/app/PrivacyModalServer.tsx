import styles from './root.module.css';

interface PrivacyModalProps {
  translation: {
    policy: string;
  };
  method: React.ReactNode;
  isOpen: boolean;
}

export default function PrivacyModalServer({ translation, method, isOpen }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <dialog className={styles.modalDialog} open>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{translation.policy}</h2>
          <form method="dialog">
            <button className={styles.closeButton} type="submit">
              x
            </button>
          </form>
        </div>
        <div className={styles.modalBody}>
          {method}
        </div>
      </div>
    </dialog>
  );
}
