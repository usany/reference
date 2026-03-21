import { getComments } from '../../../lib/comments';
import { Comment } from '@/types/comment';
import styles from './Comments.module.css';

interface CommentsListServerProps {
  slug: string;
}

function organizeComments(comments: Comment[]): Comment[] {
  const commentMap = new Map<number, Comment & { replies: Comment[] }>();
  const rootComments: (Comment & { replies: Comment[] })[] = [];

  // First pass: create comment objects with empty replies array
  comments.forEach(comment => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // Second pass: organize into hierarchy
  comments.forEach(comment => {
    const commentWithReplies = commentMap.get(comment.id)!;
    
    if (comment.reply_to) {
      const parent = commentMap.get(comment.reply_to);
      if (parent) {
        parent.replies.push(commentWithReplies);
      }
    } else {
      rootComments.push(commentWithReplies);
    }
  });

  return rootComments;
}

const CommentItemServer = ({ comment, level = 0 }: { comment: Comment & { replies?: Comment[] }; level?: number }) => {
  const isReply = comment.reply_to !== undefined;
  const replies = comment.replies || [];

  return (
    <div className={`${styles.comment} ${isReply ? styles.reply : ''}`}>
      <div className={styles.commentHeader}>
        <span className={styles.author}>{comment.author}</span>
        <div className={styles.commentMeta}>
          {isReply && (
            <span className={styles.replyBadge}>
              Reply
            </span>
          )}
          <span className={styles.timestamp}>
            {comment.updated_at && comment.updated_at !== comment.created_at
              ? `Updated: ${new Date(comment.updated_at).toLocaleString()} (Created: ${new Date(comment.created_at).toLocaleString()})`
              : new Date(comment.created_at).toLocaleString()
            }
          </span>
        </div>
      </div>
      
      <p className={styles.commentContent}>{comment.content}</p>

      {/* Render replies */}
      {replies.length > 0 && (
        <div className={styles.replies}>
          {replies.map((reply: Comment & { replies?: Comment[] }) => (
            <CommentItemServer key={reply.id} comment={reply} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default async function CommentsListServer({ slug }: CommentsListServerProps) {
  try {
    const comments = await getComments(slug);
    
    if (comments.length === 0) {
      return <p className={styles.noComments}>No comments yet.</p>;
    }

    return (
      <div className={styles.commentsList}>
        {organizeComments(comments).map(comment => (
          <CommentItemServer key={comment.id} comment={comment} />
        ))}
      </div>
    );
  } catch (error) {
    return <p>Failed to load comments.</p>;
  }
}
