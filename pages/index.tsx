import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
