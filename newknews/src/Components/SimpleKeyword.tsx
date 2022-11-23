import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.65)),
    url("img/keyword.png");
  background-size: cover;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 79%;
  color: #f3f3f3;
  float: left;
`;

const Box1 = styled.div`
  //background-color: red;
  margin-top: 18%;
  text-align: center;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Box2 = styled.div`
  //background-color: yellow;
  text-align: center;
`;
const Box3 = styled.div`
  //background-color: blue;
  text-align: center;
`;

const Content = styled.div<{
  size: string;
  left?: string;
  height?: string;
  vertical?: string;
  bold?: number;
  color?: string;
}>`
  //background-color: gray;
  display: inline-block;
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.left};
  height: ${(props) => props.height};
  vertical-align: ${(props) => props.vertical};
  font-weight: ${(props) => props.bold};
  margin-top: 3px;
  margin-right: 3px;
`;

const Side = styled.div`
  //background-color: #f1f1db;
  height: 100%;
  width: 20%;
  float: right;
`;

const Help = styled.div`
  //background-color: #e9d5d5;
  margin-left: 5px;
  p {
    display: inline-block;
    //background-color: orange;
    padding-left: 2px;
    color: #0253a4;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
  }
`;

const Icon = styled.svg`
  margin-top: 3px;
  fill: #0253a4;
  height: 15px;
  width: 15px;
  float: left;
`;

const Tri = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 10px solid rgba(0, 0, 0, 0.4);
  margin-left: 10px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
`;

const Exp = styled.div`
  height: 30%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 3px;
  color: white;
  font-size: 12px;
  border-radius: 3px;
`;

const Switch = styled.div``;

function SimpleKeyword() {
  return (
    <>
      <Wrapper>
        <Box1>
          <Content size="20px" vertical="middle" bold={400}>
            4키워드
          </Content>
          <Content size="26px" height="36px" bold={500} left="3px">
            1키워드
          </Content>
          <Content size="17px" vertical="bottom" bold={400}>
            6키워드
          </Content>
        </Box1>
        <Box2>
          <Content size="24px" bold={500}>
            2키워드
          </Content>
          <Content
            size="22px"
            height="26px"
            vertical="bottom"
            bold={400}
            left="7px"
          >
            3키워드
          </Content>
        </Box2>
        <Box3>
          <Content size="12px">8키워드</Content>
          <Content
            size="18px"
            height="22px"
            vertical="bottom"
            left="2px"
            bold={400}
          >
            5키워드
          </Content>
        </Box3>
        <Content left="100px" size="16px">
          7키워드
        </Content>
      </Wrapper>
      <Side>
        <Help>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
          </Icon>
          <p>키워드</p>
          <Tri></Tri>
          <Exp>
            수집된 기사를 바탕으로 키워드를 추출하여 언급량이 많은 순으로
            보여줍니다.
          </Exp>
        </Help>
      </Side>
    </>
  );
}
export default SimpleKeyword;
