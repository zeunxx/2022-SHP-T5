import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
`;

const HdTop = styled.div`
  //background-color: #70b4b0;
  position: relative;
  height: 68px;
  text-align: center;
`;

const HdNav = styled.div`
  //background-color: #bcbab5;
  height: 68px;
`;

function Header() {
  return (
    <Wrapper>
      <HdTop></HdTop>
      <HdNav></HdNav>
    </Wrapper>
  );
}
export default Header;
