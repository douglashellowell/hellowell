import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #dddddd;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;

    li {
      margin: 0;
      color: grey;
      padding: 2rem;

      &:hover {
        color: black;
      }
    }
  }
`;

const Nav = () => {
  return (
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
  );
};

export default Nav;
