import styles from '../root.module.css';
import Image from 'next/image';
import { User2, Umbrella, Users2 } from 'lucide-react';
import secl from '@/assets/cl.jpeg';

export default function HeroVisual() {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.floatingCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <Image
              src="/favicons.png"
              alt="KHUSAN"
              width={84}
              height={24}
            />
            <Image
              src={secl}
              alt="KHUSAN"
              width={84}
              height={24}
            />
          </div>
          <div className={styles.cardHeader}>
            <User2 />
            <Umbrella />
            <Users2 />
          </div>
        </div>
      </div>
    </div>
  );
}
