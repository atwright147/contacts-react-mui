import { FC } from 'react';
import { Comment } from '../../../types/comment.type';
import styles from '../details.module.scss';

interface Props {
  comments: Comment[];
}

export const Comments: FC<Props> = ({ comments }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.comment}</li>
      ))}
    </ul>
  );
};
