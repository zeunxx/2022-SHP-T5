import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  height: 450px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  //background-color: #89b2e9;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  //background-color: #6182dc;
`;

//기사 개수, 동적으로 받아올 것
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
  margin-bottom: 25px;
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

const BoxWrapper = styled.div`
  //background-color: #b19fc1;
  height: 250px;
  width: 1000px;
  float: left;
`;

const MiniHeader = styled.div<{ bgcolor: string }>`
  width: 325px;
  height: 30px;
  background-color: ${(props) => props.bgcolor};
  text-align: center;
  color: whitesmoke;
  line-height: 30px;
  font-weight: 400;
`;

const BoxVariant = {
  hover: {
    scale: 1.1,
  },
};

const Box = styled(motion.div)`
  // background-color: #9898cb;
  height: 280px;
  width: 350px;
  float: left;
  text-align: center;
`;

const Bar = styled.div`
  //background-color: #d5f1a4;
  height: 70px;
  width: 700px;
  float: left;
  text-align: center;
  margin-top: 30px;
  padding-top: 0px;
  padding-right: 25px;
  position: relative;
  span {
    position: absolute;
    left: 0px;
    bottom: 0px;
    font-size: 15px;
    font-weight: 300;
  }
`;

const Side = styled.div`
  //background-color: #3377ba;
  height: 350px;
  width: 279px;
  float: right;
  border: 1px solid #bfdefc;
  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }
`;

const Img = styled.div<{ bgphoto: string }>`
  height: 220px;
  width: 325px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border: 0px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  h1 {
    color: whitesmoke;
    font-size: 18px;
    text-align: left;
    padding-left: 5px;
    font-weight: 400;
    position: absolute;
    bottom: 40px;
  }
  p {
    color: #d1cdcd;
    font-size: 14px;
    text-align: left;
    padding-left: 5px;
    position: absolute;
    bottom: 20px;
  }
`;

const Circle = styled(motion.div)<{ backcolor: boolean }>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  //background-color: #aeaeae;
  display: inline-block;
  margin: 0px 2px;
  background-color: ${(props) => (props.backcolor ? "#eea257" : "#aeaeae")};
  cursor: pointer;
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

function Issue() {
  const [num, setNum] = useState(8); // 초기값8, 클러스터링이 8개가 안되면 동적 생성
  const [now, setNow] = useState(0);
  const [issue, setIssue] = useState([true]);
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
        //console.log(data.length / 10);
        if (num > data.length / 10) {
          setNum(data.length / 10);
        }
      });
  }, []);

  useEffect(() => {
    const check = [true, ...Array(num - 1).fill(false)];
    setIssue(check);
  }, [num]);

  useEffect(() => {
    const check = [
      ...Array(now).fill(false),
      true,
      ...Array(num - now - 1).fill(false),
    ];
    //console.log(check);
    setIssue(check);
  }, [now]);

  return (
    <>
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
        <BoxWrapper>
          <a href={state[now * 10].news_link} target="_blank">
            <Box whileHover="hover" variants={BoxVariant}>
              <Img bgphoto={state[now * 10].image_link}>
                <h1>{state[now * 10].headline}</h1>
                <p>{state[now * 10].press}</p>
              </Img>
              <MiniHeader bgcolor="#0475E6">이 슈</MiniHeader>
            </Box>
          </a>
          <a href={state[now * 10 + 9].news_link} target="_blank">
            <Box whileHover="hover" variants={BoxVariant}>
              <Img bgphoto={state[now * 10 + 9].image_link}>
                <h1>{state[now * 10 + 9].headline}</h1>
                <p>{state[now * 10 + 9].press}</p>
              </Img>
              <MiniHeader bgcolor="#E67404">다른 의견</MiniHeader>
            </Box>
          </a>
          <Side>
            <a href="https://github.com/AttBHtBt/2022-SHP-T5" target="_blank">
              <img src="img/preview.png" />
            </a>
          </Side>
        </BoxWrapper>
        <Bar>
          <Link to="/Detail">
            <span>전체 기사 보기 〉</span>
          </Link>
          {issue.map((i, index) => (
            <Circle
              key={index}
              onClick={() => {
                setNow(index);
              }}
              backcolor={issue[index]}
            ></Circle>
          ))}
        </Bar>
      </Wrapper>
    </>
  );
}
export default Issue;
