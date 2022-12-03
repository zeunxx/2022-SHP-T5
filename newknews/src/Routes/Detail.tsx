import styled from "styled-components";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
  //background-color: #b7d7f7;
  margin-bottom: 20px;
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
  display: inline-block;
  p {
    font-size: 11px;
    font-weight: 400;
    display: inline-block;
    margin-right: 20px;
  }
`;

const Nownews = styled.div`
  display: inline;
  //background-color: #c9eec5;
  color: #aeaeae;
  font-size: 12px;
  float: right;
  padding-top: 20px;
  p {
    font-size: 12px;
    font-weight: 500;
    display: inline;
  }
`;

const Box = styled.div`
  height: 400px;
  width: 1000px;
  background-color: #e9f3ff;
  margin-top: 20px;
  position: relative;
`;
const MiniBox = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  text-align: center;
`;

const BoxVariant = {
  hover: {
    scale: 1.1,
  },
};

const Img = styled(motion.div)<{ bgurl: string }>`
  background-color: #cecece;
  width: 85%;
  height: 65%;
  margin: 0px auto;
  margin-top: 40px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgurl});
  background-size: cover;
  position: relative;
`;

const Head = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: -45px;
  //background-color: antiquewhite;
  padding-top: 10px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
`;

const Exp = styled.div<{ bgColor: string }>`
  //background-color: #edffff;
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0px;
  background-color: ${(props) => props.bgColor};
  p {
    text-align: center;
    color: whitesmoke;
    line-height: 45px;
    font-size: 18px;
    font-weight: 500;
  }
`;

const Tab = styled.div`
  //background-color: #a8bcd3;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
  text-align: center;
`;

const Circle = styled(motion.div)<{ backcolor: boolean }>`
  background-color: ${(props) => (props.backcolor ? "#eea257" : "#d0d0d0")};
  height: 10px;
  width: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
  background-color: #f6f6f6;
  height: 1150px;
`;

const Preview = styled.div`
  margin-top: 50px;
  background-color: #024b94;
  text-align: center;
  width: 100%;
  height: 120px;
  color: white;
`;

const ContentBox = styled.div`
  //background-color: #a89999;
  text-align: center;
  width: 50%;
  float: left;
`;

const Exp2 = styled.div<{ fontColor: string }>`
  //background-color: #f2bcbc;
  padding-top: 25px;
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  span {
    color: ${(props) => props.fontColor};
    font-size: 20px;
    font-weight: 600;
  }
`;

const Item = styled(motion.div)`
  height: 100px;
  width: 90%;
  background-color: #ffffff;
  border: 0.5px solid #d2d2d2;
  margin-left: 5%;
  margin-bottom: 15px;
  padding-top: 10px;
`;

const SImg = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  height: 80px;
  width: 130px;
  border-radius: 5px;
  background-size: cover;
  margin-left: 10px;
  float: left;
`;

const Content2 = styled.div<{ h2Color: string }>`
  height: 80px;
  width: 280px;
  float: left;
  margin-left: 15px;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  padding-top: 5px;
  position: relative;

  h2 {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.h2Color};
    position: absolute;
    bottom: 5px;
    span {
      font-size: 13px;
      font-weight: 400;
      color: #767676;
    }
    p {
      display: inline;
      color: #767676;
      font-weight: 400;
    }
  }
`;

export interface IProp {
  cluster_num: string;
  subject: string;
  headline: string;
  content: string;
  press: string;
  image_link: string;
  news_link: string;
  discuss: string;
}

function Detail() {
  const [date, setDate] = useState([...Array(3).fill("")]);
  const [state, setState] = useState<IProp[]>(
    Array(10).fill({
      cluster_num: "0",
      subject: "",
      headline: "",
      content: "",
      press: "",
      image_link: "",
      news_link: "",
      discuss: "",
    })
  );
  const [now, setNow] = useState(0);
  const [issue, setIssue] = useState([true]);
  const [dicheck, setDicheck] = useState([0]);

  useEffect(() => {
    const now = new Date();
    const year = "" + now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    setDate([year, month, day]);
  }, []);

  useEffect(() => {
    fetch(`/getNews`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "User-Agent": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        /* data.map((item: any, index: any) => {
          console.log(item);
          console.log(index);
        }); */
      });
  }, []);

  useEffect(() => {
    let c = [-8];
    Array(state.length / 10)
      .fill(-1)
      .map((item, index) => {
        let count = 0;
        Array(10)
          .fill(-2)
          .map((item2, index2) => {
            //console.log(item, index, item2, index2);
            //console.log(index * 10 + index2);
            if (state[index * 10 + index2]?.discuss === "1") {
              count += 1;
            }
          });
        c = [...c, count];
      });
    setDicheck(c.slice(1));
  }, [state]);

  useEffect(() => {
    let check = [true];
    if (state.length > 10) {
      check = [
        ...Array(now).fill(false),
        true,
        ...Array(state.length / 10 - now - 1).fill(false),
      ];
    }
    setIssue(check);
  }, [now]);

  return (
    <>
      <Header />
      <Wrapper>
        <Title>오늘의 이슈</Title>
        <NumNews>
          이슈분류 <Num>{Number(state[state.length - 1].cluster_num)}+α</Num>
          <p>건</p>
          의견분류 <Num>{state.length / 10}</Num>
          <p>건</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>
          {date[0] + "년 " + date[1] + "월 " + date[2] + "일 "}
          12:00
        </Nownews>
        <Box>
          <MiniBox>
            <Img
              bgurl={state[now * 10]?.image_link}
              whileHover="hover"
              variants={BoxVariant}
            >
              <Exp bgColor="#0475E6">
                <p>긍정 의견</p>
              </Exp>
              <Head>{state[now * 10]?.headline}</Head>
            </Img>
          </MiniBox>
          <MiniBox>
            <Img
              bgurl={state[now * 10 + 9]?.image_link}
              whileHover="hover"
              variants={BoxVariant}
            >
              <Exp bgColor="#626262">
                <p>부정 의견</p>
              </Exp>
              <Head>{state[now * 10 + 9]?.headline}</Head>
            </Img>
          </MiniBox>
          <Tab>
            {Array(state.length / 10)
              .fill(0)
              .map((i, index) => (
                <Circle
                  key={index}
                  onClick={() => {
                    setNow(index);
                  }}
                  backcolor={issue[index]}
                ></Circle>
              ))}
          </Tab>
        </Box>
      </Wrapper>

      <Content>
        {/* <Preview>
          <h1>대표기사헤드라인읭</h1>
          <h2>언론사 | 카테고리 | 긍부정</h2>
        </Preview> */}

        <ContentBox>
          <Exp2 fontColor="#0064c8">
            긍정 의견 <span>{dicheck[now]}</span>건
          </Exp2>
          {Array(dicheck[now])
            .fill(0)
            .map((item, index) => (
              <a href={state[now * 10 + index]?.news_link} target="_blank">
                <Item key={index} whileHover="hover" variants={BoxVariant}>
                  {/* {now * 10 + index} */}
                  <SImg src={state[now * 10 + index]?.image_link} />
                  <Content2 h2Color="#0064c8">
                    <h1>{state[now * 10 + index]?.headline}</h1>
                    <h2>
                      {state[now * 10 + index]?.press} <p>| </p>
                      <span>{state[now * 10 + index]?.subject}</span>
                    </h2>
                  </Content2>
                </Item>
              </a>
            ))}
        </ContentBox>
        <ContentBox>
          <Exp2 fontColor="#a00058">
            부정 의견 <span>{10 - dicheck[now]}</span>건
          </Exp2>
          {Array(10 - dicheck[now])
            .fill(0)
            .map((item, index) => (
              <a
                href={state[now * 10 + dicheck[now] + index]?.news_link}
                target="_blank"
              >
                <Item key={index} whileHover="hover" variants={BoxVariant}>
                  {/* {now * 10 + dicheck[now] + index} */}
                  <SImg
                    src={state[now * 10 + dicheck[now] + index]?.image_link}
                  />
                  <Content2 h2Color="#a00058">
                    <h1>{state[now * 10 + dicheck[now] + index]?.headline}</h1>
                    <h2>
                      {state[now * 10 + dicheck[now] + index]?.press} <p>| </p>
                      <span>
                        {state[now * 10 + dicheck[now] + index]?.subject}
                      </span>
                    </h2>
                  </Content2>
                </Item>
              </a>
            ))}
        </ContentBox>
      </Content>
    </>
  );
}

export default Detail;
