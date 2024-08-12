import { ReactNode } from 'react';
import styles from './Board.module.css';

export interface GridProps {
  children: ReactNode;
}

export const Board = ({ children }: GridProps) => {
  return <div className={styles.board}>{children}</div>;
};
