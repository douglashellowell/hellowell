import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeStyles, ThemeToggleContext } from 'styles/theme';

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNav = styled.nav`
  background-color: ${({ theme }: { theme: ThemeStyles }) => theme.secondary};
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;

    li {
      margin: 0;
      padding: 2rem;

      &:hover {
        color: black;
      }
    }
  }
`;

const Nav = () => {
  const toggleDarkMode = useContext(ThemeToggleContext);

  return (
    <StyledNavWrapper>
      <button onClick={toggleDarkMode}>toggle</button>
      <StyledNav>
        <ul>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Nav;
