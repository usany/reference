import styles from './root.module.css';

interface ServerComponentProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

export default function ServerComponentWithTheme({ theme, children }: ServerComponentProps) {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  
  return (
    <div className={`${styles.container} ${themeClass}`}>
      <h2>Server Component Theme: {theme}</h2>
      <p>This component receives theme as a prop (server-side).</p>
      {children}
    </div>
  );
}
