import Nav from './Nav';
import styled from 'styled-components';
import { ThemeToggleContext } from 'styles/theme';
import { useContext } from 'react';
import Link from 'next/link';

const StyledHeader = styled.header`
  text-align: center;
  background-color: white;
  /* position: sticky;
  top: 0; */
`;

const Header = () => {
  const themeToggle = useContext(ThemeToggleContext);
  return (
    <StyledHeader>
      <Link href="/">
        <h1>Douglas Hellowell</h1>
      </Link>
      <button onClick={themeToggle}>🌞/🌝</button>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
