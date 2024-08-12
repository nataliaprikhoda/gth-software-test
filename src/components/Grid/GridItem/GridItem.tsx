import React, { ReactNode } from 'react';
import styles from './GridItem.module.css';

export interface GridItemProps {
  title: string;
  children: ReactNode;
}

export const GridItem = ({ children, title }: GridItemProps) => {
  return <article className={styles.item}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
    </article>;
};
