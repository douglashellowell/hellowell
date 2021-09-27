import type { NextPage } from 'next';
import styled from 'styled-components';
import { ThemeStyles } from 'styles/theme';
// import styles from '../styles/Home.module.css';

const StyledTechCard = styled.li`
  background-color: ${({ theme }: { theme: ThemeStyles }) => theme.linkVisited};
  padding: 2rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 0 2rem;
    height: 80px;
  }
`;

const TechCard: React.FC<{ techName: string; techImg: string }> = ({
  techImg,
  techName,
}) => {
  return (
    <StyledTechCard>
      {techName}
      <img src={techImg}></img>
    </StyledTechCard>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <h2>
        Hey there! <span>👋</span>
      </h2>
      <p>My name is Doug. (or Douglas, i really don&apos;t mind)</p>
      <p>
        I&apos;m a software developer & tutor at the Northcoders Bootcamp in
        Manchester
      </p>
      <p>
        This site is a space for me to share my ideas, what i&apos;m working on
        and to generally have a play with some cool new tech!
      </p>

      <p>I&apos;ve had fun building this site with:</p>
      <ul>
        <TechCard
          techName="NextJs"
          techImg="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        />
        <TechCard
          techName="Typescript"
          techImg="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        />
        <TechCard
          techName="styled-components"
          techImg="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
        />
        <TechCard
          techName="polished"
          techImg="https://polished.js.org/assets/logo.svg"
        />
        <TechCard
          techName="remark / rehype"
          techImg="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg"
        />
      </ul>

      <p>
        I&apos;m always up for a chat - code and non-code related! Drop me a
        line at: ____email here____
      </p>
    </div>
  );
};

export default Home;
