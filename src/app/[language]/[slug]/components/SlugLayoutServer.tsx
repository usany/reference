import styles from './SlugLayout.module.css';
import CommentsListServer from './CommentsListServer';
import MDXContentServer from './MDXContentServer';

interface SlugLayoutServerProps {
  pageId: string;
  isSideNavMinified: boolean;
  isTocOpen: boolean;
}

export default function SlugLayoutServer({ 
  pageId, 
  isSideNavMinified, 
  isTocOpen 
}: SlugLayoutServerProps) {
  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.contentContainer} ${isSideNavMinified ? styles.contentMinifiedSideNav : ''} ${!isTocOpen ? styles.contentExpanded : ''}`}>
        <div className={styles.content}>
          <MDXContentServer slug={pageId} />
        </div>
        <CommentsListServer slug={pageId} />
      </div>
    </div>
  );
}
