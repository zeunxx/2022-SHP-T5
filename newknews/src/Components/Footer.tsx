import styled from "styled-components";

const Total = styled.div`
  background-color: #edf6ff;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
  height: 65px;

  //background-color: bisque;
  img {
    margin-top: 10px;
    height: 45px;
  }
`;

const Content = styled.div`
  display: inline-block;
  padding-left: 10px;
  h1 {
    font-size: 16px;
    font-weight: 400;
    &:hover {
      color: #1f5cc0;
    }
  }
  p {
    font-size: 14px;
    color: #606060;
    margin-top: 3px;
  }
`;

function Footer() {
  return (
    <Total>
      <Wrapper>
        <img src="img/github.png"></img>
        <Content>
          <a href="https://github.com/AttBHtBt/2022-SHP-T5" target="_blank">
            <h1>https://github.com/AttBHtBt/2022-SHP-T5</h1>
          </a>
          <p>2022산학협력프로젝트</p>
        </Content>
      </Wrapper>
    </Total>
  );
}
export default Footer;
