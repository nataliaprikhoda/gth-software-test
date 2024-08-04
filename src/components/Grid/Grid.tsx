import { ReactNode } from 'react';
import {GridItem} from './GridItem';
import styles from './Grid.module.css';

export interface GridProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <section className={styles.grid}>{children}</section>;
};

Grid.Item = GridItem;
