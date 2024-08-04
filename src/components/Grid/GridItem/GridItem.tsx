import React, { ReactNode } from 'react';

export interface GridItemProps {
  title: string;
  children: ReactNode;
}

export const GridItem = ({ children, title }: GridItemProps) => {
  return <article>
    <h3>{title}</h3>
    <div>{children}</div>
    </article>;
};
