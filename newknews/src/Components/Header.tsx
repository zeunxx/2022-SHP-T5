import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
`;

const HdTop = styled.div`
  background-color: #d7e6e5;
  position: relative;
  height: 68px;
  text-align: center;
`;

const Logo = styled.span`
  background-color: #4b89dc;
  font-size: 36px;
  position: absolute;
  top: 16px;
  left: 0;
`;

const HdNav = styled.div`
  background-color: #bcbab5;
  height: 68px;
`;

function Header() {
  return (
    <Wrapper>
      <HdTop>
        <Logo>NewKnews</Logo>
      </HdTop>
      <HdNav>
        <h1>nav바</h1>
      </HdNav>
    </Wrapper>
  );
}
export default Header;
