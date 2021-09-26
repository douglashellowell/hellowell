import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>
          Hey there! <span>👋</span>
        </h2>
        <p>
          My name is Doug. (or Douglas, i really don&apos;t mind either way)
        </p>
        <p>
          I&apos;m a software developer & tutor at the Northcoders Bootcamp in
          Manchester
        </p>
        <p>
          This site is a space for me to share my ideas, what i&apos;m working
          on and to generally have a play with some cool new tech!
        </p>

        <p>I&apos;ve had fun building this site with:</p>
        <ul>
          <li>NextJS</li>
          <li>Typescript</li>
          <li>styled-components</li>
          <li>polished</li>
          <li>remark / rehype</li>
        </ul>

        <p>
          I&apos;m always up for a chat - code and non-code related! Drop me a
          line at: ____email here____
        </p>
      </main>
    </div>
  );
};

export default Home;
