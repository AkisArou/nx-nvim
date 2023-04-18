import { Lib1 } from '@nx-nvim/lib-1';
import styles from './lib-2.module.css';

/* eslint-disable-next-line */
export interface Lib2Props {}

export function Lib2(props: Lib2Props) {
  return (
    <div className={styles['container']}>
      <Lib1/>
      <h1>Welcome to Lib2!</h1>
    </div>
  );
}

export default Lib2;
