import styles from '../root.module.css';
import { LinkItem, Links } from '@/types/links';
import { Language } from '@/context/LanguageContext';
import { Button } from '@mui/material';

interface ButtonGroupProps {
  links: Links;
  language: Language;
}

export default function ButtonGroup({ links, language }: ButtonGroupProps) {
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
