import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import {
  ThemeMode,
  ThemeStateContext,
  ThemeStyles,
  ThemeToggleContext,
} from 'styles/theme';

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

const StyledThemeToggle = styled.button`
  background-color: ${({ theme }: { theme: ThemeStyles }) => theme.secondary};
  opacity: 0.9;
  border: 1px solid ${({ theme }: { theme: ThemeStyles }) => theme.secondary};
  padding: 0 1rem;
`;

const Nav = () => {
  const toggleDarkMode = useContext(ThemeToggleContext);
  const themeState = useContext(ThemeStateContext);

  return (
    <StyledNavWrapper>
      <StyledThemeToggle onClick={toggleDarkMode}>
        {themeState === ThemeMode.lightMode ? '🌞' : '🌝'}
      </StyledThemeToggle>
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
