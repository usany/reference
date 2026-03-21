import styles from '../root.module.css';
import type { LinkItem } from '@/types/links';
import { Button } from '@mui/material';
import { getLanguage } from '@/hooks/useServerTheme';
import links from 'links';

export default async function ButtonGroup() {
  const language = await getLanguage()
  return (
    <div className={styles.buttonGroup}>
      {links[language].map((link: LinkItem, index: number) => (
        <Button key={index} href={link.href} variant='outlined' className={'colorOne'}>
          <div className={styles.buttonContent}>
            {link.icon}
            {link.label}
          </div>
        </Button>
      ))}
    </div>
  );
}
