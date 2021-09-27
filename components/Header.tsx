import Nav from './Nav';
import styled from 'styled-components';
import { ThemeStyles, ThemeToggleContext } from 'styles/theme';
// import { useContext } from 'react';
import Link from 'next/link';

const StyledHeader = styled.header`
  text-align: center;
  /* padding-top: ${({ theme }: { theme: ThemeStyles }) => theme.spacing2}; */
  /* background-color: ${({ theme }: { theme: ThemeStyles }) =>
    theme.primary}; */
  background-color: ${({ theme }: { theme: ThemeStyles }) =>
    theme.themeDarkRed.replace('%23', '#')};
  position: relative;
  z-index: 99;

  & > div {
    max-width: ${({ theme }: { theme: ThemeStyles }) => theme.mainWidth};
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: white;
      cursor: pointer;
      font-weight: 100;
      text-indent: 20px;
      /* text-align: center; */
    }
  }
`;

const Header = () => {
  // const themeToggle = useContext(ThemeToggleContext);
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <h1>Douglas Hellowell</h1>
        </Link>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
