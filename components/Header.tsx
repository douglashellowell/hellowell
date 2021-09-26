import Nav from './Nav';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  background-color: white;
  /* position: sticky;
  top: 0; */
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Douglas Hellowell</h1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
