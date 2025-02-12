import styled from "styled-components";
import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { motion } from "framer-motion";
import axios from "axios";

const Wrapper = styled.div`
  //background-color: #f5f5cb;
  height: 320px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  position: relative;
`;

const TopLeftBox = styled.div`
  //background-color: #ef9e9e;
  height: 30%;
  width: 35%;
`;

const BottomLeftBox = styled.div`
  //background-color: aliceblue;
  //border: 1px solid #c4c4c4;
  //background-color: #aed8fd;
  height: 70%;
  width: 50%;
  bottom: 0;
`;

const Side = styled.div`
  //background-color: yellow;
  height: 100%;
  float: left;
  width: 20%;
`;

const Help = styled.div`
  //background-color: #e9d5d5;
  margin-right: 5px;
  p {
    display: inline-block;
    //background-color: orange;
    padding-left: 2px;
    color: #0253a4;
    font-size: 13px;
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
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 3px;
  color: white;
  font-size: 12px;
  border-radius: 3px;
`;

const Switch = styled.div`
  height: 30%;
  //background-color: #eeb7b7;
  margin-top: 10px;
  margin-right: 5px;
`;

const Circle = styled(motion.div)`
  background-color: #eea257;
  border-radius: 4.5px;
  height: 9px;
  width: 9px;
  margin-top: 3px;
  margin-left: 3px;
  float: left;
`;

const Item = styled.div<{ active: boolean }>`
  height: 33.3%;
  //background-color: yellowgreen;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.active ? "#E7801A" : "black")};
  p {
    float: left;
    &:hover {
      background-color: #e2e8f3;
    }
    cursor: pointer;
  }
  span {
    font-size: 13px;
    font-weight: 500;
  }
`;

const Graph = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 80%;
  float: right;
  border: 1px solid #d0d0d0;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  //background-color: #6182dc;
`;

const Num = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #0475e6;
`;

const NumNews = styled.div`
  font-size: 13px;
  font-weight: 500;
  //background-color: #b2f2d7;
  padding-top: 10px;
  p {
    font-size: 11px;
    font-weight: 400;
    display: inline-block;
    margin-right: 20px;
  }
`;

const Nownews = styled.div`
  color: #aeaeae;
  font-size: 12px;
  margin-top: 5px;
  p {
    font-weight: 500;
    display: inline;
  }
`;

const KeywordBox = styled.div`
  //background-color: #dbebfb;
  height: 100%;
  width: 100%;
`;

const RightBox = styled.div`
  background-color: #527c9f;
  //border: 1px solid #e5e5e5;
  float: right;
  height: 100%;
  width: 48%;
`;

const Wrapper2 = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.65)),
    url("img/keyword.jpg");
  background-size: cover;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 100%;
  color: #f3f3f3;
  float: right;
  padding-top: 45px;
`;

const Box = styled.div`
  //background-color: #856b6b;
  text-align: center;
`;

const Content = styled.div<{
  size: string;
  left?: string;
  height?: string;
  vertical?: string;
  bold?: number;
  color?: string;
  right?: string;
}>`
  //background-color: #434141;
  display: inline-block;
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.left};
  height: ${(props) => props.height};
  vertical-align: ${(props) => props.vertical};
  font-weight: ${(props) => props.bold};
  margin-top: 3px;
  margin-right: ${(props) => props.right};
`;

function Keyword() {
  const [state, setState] = useState(Array(20).fill({ Keyword: "" }));
  const [onlykey, setKey] = useState(["key"]);
  const [onlyfreq, setFreq] = useState([0]);
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState([...Array(3).fill("")]);

  useEffect(() => {
    const now = new Date();
    const year = "" + now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    setDate([year, month, day]);
  }, []);

  useEffect(() => {
    fetch(`/getKeyword`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "User-Agent": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        data.map((item: any) => {
          //console.log(item);
          setKey((old) => [...old, item.keyword]);
          setFreq((old) => [...old, Number(item.freq)]);
          setTotal((old) => old + Number(item.freq));
        });
      });
  }, []);

  useEffect(() => {
    setArr({ keyword: onlykey.slice(1, 8), count: onlyfreq.slice(1, 8) });
  }, [state]);

  const [arr, setArr] = useState({
    keyword: onlykey.slice(1, 8),
    count: onlyfreq.slice(1, 8),
  });
  const [check, setCheck] = useState([false, true, false]);

  const num = [3, 7, 15];

  const Chart = () => (
    <ApexCharts
      type="bar"
      height="224px"
      options={{
        dataLabels: {
          enabled: true,
          textAnchor: "middle",
          distributed: false,
          style: {
            fontSize: "12px",
            fontWeight: 400,
            colors: undefined,
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            padding: 0,
            borderRadius: 2,
            borderWidth: 0,
            borderColor: "#b7fdff",
            opacity: 0.1,
          },
        },
        xaxis: {
          categories: arr.keyword,
          labels: {
            show: true,
            style: {
              colors: "#3563B1",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: ["#7193CD"],
              //fontSize: "12px",
            },
            offsetX: -10,
          },
          axisBorder: {
            show: true,
            color: "#7193CD",
          },
        },
        grid: {
          show: true,
          position: "back",
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        colors: Array(arr.keyword.length).fill("#0364C5"),
      }}
      series={[
        {
          name: "빈도",
          data: arr.count,
        },
      ]}
    ></ApexCharts>
  );

  return (
    <Wrapper>
      <RightBox>
        <KeywordBox>
          <>
            <Wrapper2>
              <Box>
                <Content size="15px" left="3px" vertical="bottom">
                  {state[15].keyword}
                </Content>
                <Content size="21px" vertical="bottom" left="10px">
                  {state[7].keyword}
                </Content>
              </Box>
              <Box>
                <Content size="22px" vertical="bottom">
                  {state[6].keyword}
                </Content>
                <Content
                  size="30px"
                  bold={500}
                  height="38px"
                  left="3px"
                  vertical="top"
                >
                  {state[2].keyword}
                </Content>
                <Content size="17px" bold={400} left="7px" vertical="bottom">
                  {state[12].keyword}
                </Content>
              </Box>
              <Box>
                <Content size="19px" bold={500} right="7px">
                  {state[9].keyword}
                </Content>
                <Content size="16px" vertical="top">
                  {state[13].keyword}
                </Content>
                <Content size="28px" bold={500} vertical="bottom" right="3px">
                  {state[3].keyword}
                </Content>
                <Content size="34px" bold={500} height="46px" left="5px">
                  {state[0].keyword}
                </Content>
                <Content size="20px" vertical="bottom" left="10px">
                  {state[8].keyword}
                </Content>
              </Box>
              <Box>
                <Content size="16px" vertical="bottom" bold={400}>
                  {state[14].keyword}
                </Content>
                <Content
                  size="32px"
                  height="40px"
                  bold={500}
                  left="3px"
                  right="7px"
                >
                  {state[1].keyword}
                </Content>
                <Content
                  size="17px"
                  vertical="bottom"
                  bold={400}
                  left="3px"
                  right="2px"
                >
                  {state[11].keyword}
                </Content>
                <Content size="24px" bold={500} left="2px">
                  {state[5].keyword}
                </Content>
              </Box>
              <Box>
                <Content size="14px" vertical="top" left="15px" right="5px">
                  {state[16].keyword}
                </Content>
                <Content
                  size="26px"
                  height="34px"
                  vertical="bottom"
                  left="4px"
                  right="2px"
                  bold={400}
                >
                  {state[4].keyword}
                </Content>
                <Content size="18px" left="4px">
                  {state[10].keyword}
                </Content>
                <Content size="14px" left="10px" vertical="top">
                  {state[17].keyword}
                </Content>
              </Box>
            </Wrapper2>
          </>
        </KeywordBox>
      </RightBox>
      <TopLeftBox>
        <Title>오늘의 키워드</Title>
        <NumNews>
          전체키워드 <Num>{total}</Num>
          <p>개</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>
          {date[0] + "년 " + date[1] + "월 " + date[2] + "일 "}
          12:00
        </Nownews>
      </TopLeftBox>

      <BottomLeftBox>
        <Side>
          <Help>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
            </Icon>
            <p>분류기준</p>
            <Tri></Tri>
            <Exp>
              수집된 기사를 바탕으로 키워드를 추출하여 언급량이 많은 순으로
              보여줍니다.
            </Exp>
          </Help>
          <Switch>
            <Item
              onClick={() => {
                setCheck([true, false, false]);
                setArr({
                  keyword: onlykey.slice(1, 4),
                  count: onlyfreq.slice(1, 4),
                });
                //setArr(sortFun(num[0] + 1));
              }}
              active={check[0]}
            >
              <p>
                상위 <span>{num[0]}</span>개
              </p>
              {check[0] && <Circle layoutId="circle" />}
            </Item>
            <Item
              onClick={() => {
                setCheck([false, true, false]);
                setArr({
                  keyword: onlykey.slice(1, 8),
                  count: onlyfreq.slice(1, 8),
                });
                //setArr(sortFun(num[1] + 1));
              }}
              active={check[1]}
            >
              <p>
                상위 <span>{num[1]}</span>개
              </p>
              {check[1] && <Circle layoutId="circle" />}
            </Item>
            <Item
              onClick={() => {
                setCheck([false, false, true]);
                setArr({
                  keyword: onlykey.slice(1, 16),
                  count: onlyfreq.slice(1, 16),
                });
                //setArr(sortFun(num[2] + 1));
              }}
              active={check[2]}
            >
              <p>
                상위 <span>{num[2]}</span>개
              </p>
              {check[2] && <Circle layoutId="circle" />}
            </Item>
          </Switch>
        </Side>
        <Graph>
          <Chart />
        </Graph>
      </BottomLeftBox>
    </Wrapper>
  );
}

export default Keyword;
