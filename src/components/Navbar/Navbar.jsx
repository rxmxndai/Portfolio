import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline cyan;
`;

const Right = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: end;
`;

const Menu = styled.ul`
  display: flex;

  @media only screen and (max-width:600px) {
    display: none;
  }
`;

const MenuItems = styled.li`
  list-style: none;
  margin-right: 30px;
  color: gray;
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid cyan;
  padding: 10px 15px;
  background-color: lightcyan;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Roman</Logo>
        <Right>
          <Menu>
            <MenuItems> Home </MenuItems>
            <MenuItems> About </MenuItems>
            <MenuItems> Skills </MenuItems>
            <MenuItems> Projects </MenuItems>
          </Menu>

          <Button>Hire now</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
