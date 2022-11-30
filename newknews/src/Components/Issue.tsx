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

/* export interface IProp {
  cluster_num: string;
  subject: string;
  headline: string;
  content: string;
  press: string;
  image_link: string;
  news_link: string;
} */

function Issue() {
  const [num, setNum] = useState(8); // 초기값8, 클러스터링이 8개가 안되면 동적 생성
  const [now, setNow] = useState(0);
  const [issue, setIssue] = useState([true]);
  const [date, setDate] = useState([...Array(3).fill("")]);

  useEffect(() => {
    const now = new Date();
    const year = "" + now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    setDate([year, month, day]);
  }, []);

  useEffect(() => {
    //console.log(prop);
    //console.log(Object.keys(prop).length);
    /* if (num > Object.keys(prop).length) {
      setNum(Object.keys(prop).length);
    } */
    //console.log(num);
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

  /* {Object.values(data).map((value, i) => (
    <Item key={i + 1}>
      <Index>{value.index + ". "}</Index>
      <Title>{value.title}</Title>
    </Item>
  ))} */

  return (
    <>
      <Wrapper>
        <Title>오늘의 이슈</Title>
        <NumNews>
          분석뉴스 <Num>1200</Num>
          <p>건</p>
          의견분류 <Num>{num}</Num>
          <p>건</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>
          {date[0] + "년 " + date[1] + "월 " + date[2] + "일 "}
          12:00
        </Nownews>
        <BoxWrapper>
          <Box whileHover="hover" variants={BoxVariant}>
            <Img bgphoto="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/08/moneytoday/20221108144626291fpmm.jpg">
              <h1>
                대통령경호처, 용산 이전으로 기동대 추가? "집회 대비한 배치"
              </h1>
              <p>머니투데이</p>
            </Img>
            <MiniHeader bgcolor="#0475E6">이 슈</MiniHeader>
          </Box>
          <Box whileHover="hover" variants={BoxVariant}>
            <Img bgphoto="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/08/chosunbiz/20221108143726898vrrk.jpg">
              <h1>
                이태원 ‘사고’냐 ‘참사’냐… 與野, 대통령실 국정감사서 불붙은 용어
                논쟁
              </h1>
              <p>조선비즈</p>
            </Img>
            <MiniHeader bgcolor="#E67404">다른 의견</MiniHeader>
          </Box>
          <Side>
            <img src="img/preview.png" />
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
