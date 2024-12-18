import type { ElementType, ReactNode } from 'react';

import * as styles from './ToolbarPanel.css';

interface Props {
  children: ReactNode;
  as?: ElementType;
}

export const ToolbarPanel = ({ as: Component = 'aside', children }: Props) =>
  <Component className={styles.root}>{children}</Component>;
