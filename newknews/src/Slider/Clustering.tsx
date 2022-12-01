import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Weather from "../Components/Weather";
import ApexCharts from "react-apexcharts";

const Wrapper = styled.div`
  //background-color: aqua;
  height: 420px;
  :first-child {
    background-color: white;
  }
`;

const Box = styled.div<{ backColor: boolean }>`
  height: 70px;
  background-color: ${(props) => (props.backColor ? "#0475E6" : "white")};
  color: ${(props) => (props.backColor ? "white" : "black")};
  padding: 10px;
  border-left: 1px solid #c4c4c4;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 11px;
    color: ${(props) => (props.backColor ? "	#EEA257" : "#818181")};
    padding-top: 5px;
  }
  &:hover {
    color: #c3c3c3;
  }
`;

const NewsBox = styled.div`
  //background-color: #f7b1b1;
  height: 330px;
  margin-top: 10px;
`;

const SliderBox = styled.div`
  border: 1px solid #c4c4c4;
  //background-color: #a5fdb2;
`;

const NextBtn = styled.button`
  //border: 1.5px solid #c7c7c7;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  top: -12px;
  left: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #ebebeb;
`;

const Title = styled.p`
  //background-color: aquamarine;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const News = styled.div`
  //background-color: #8d79cb;
  border: 1px solid #c4c4c4;
  height: 300px;
  width: 680px;
  float: left;
  padding: 20px;
`;

const MainLeft = styled.div`
  height: 100%;
  width: 35%;
  //background-color: #f5d4d4;
  float: left;
`;

const Img = styled.div<{ url: string }>`
  width: 100%;
  height: 55%;
  border-radius: 15px;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const Header = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding-top: 3px;
`;

const Press = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #024b94;
  padding-top: 10px;
`;

const MainRight = styled.div`
  //background-color: #78a2da;
  height: 100%;
  width: 60%;
  float: left;
  margin-left: 30px;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  //background-color: gray;
  height: 14.2%;
  width: 100%;
  line-height: 100%;
`;

const Title2 = styled.p`
  font-size: 13px;
  font-weight: 600;
  width: 80%;
  //background-color: #f7dfdf;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  float: left;
  &:hover {
    color: #0459e6;
    text-decoration: underline;
  }
`;

const Press2 = styled.span`
  width: 18%;
  //background-color: #4a4269;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  color: "#818181";
  float: right;
`;

const Side = styled.div`
  //background-color: #d08c8c;
  //border: 1px solid #c4c4c4;
  height: 300px;
  width: 300px;
  float: right;
`;

const WeatherBox = styled.div`
  //background-color: #e0b2b2;
  border: 1px solid #c4c4c4;
  width: 100%;
  height: 32%;
  margin-bottom: 3%;
`;

const Now = styled.div`
  padding-left: 8%;
  padding-top: 5%;
  font-size: 14px;
  //background-color: orange;
  font-weight: 600;
  span {
    padding-left: 5px;
    font-size: 11px;
    font-weight: 300;
    color: #9b9b9b;
  }
`;

const KeyWord = styled.div`
  border: 1px solid #c4c4c4;
  background-color: aliceblue;
  width: 100%;
  height: 65%;
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

const Head = styled.h1`
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
    font-weight: 500;
    display: inline;
  }
`;

const Clustering = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: "0px",
    nextArrow: (
      <div>
        <NextBtn> 〉</NextBtn>
      </div>
    ),
  };

  const [box, setBox] = useState<number>(0);
  const [toggle, setToggle] = useState([true, ...Array(9).fill(false)]);
  const [date, setDate] = useState([...Array(3).fill("")]);
  const [state, setState] = useState<IProp[]>([]);
  const [num, setNum] = useState(["0"]);
  const [keyword, setKeyword] = useState([
    {
      index: "",
      keyword: ["", "", ""],
      count: [0, 0, 0],
    },
  ]);

  useEffect(() => {
    const now = new Date();
    const year = "" + now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    setDate([year, month, day]);

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
      });
  }, []);

  useEffect(() => {
    setNum(() => {
      let arr = Array(state.length / 10).fill(0);
      arr.map((item, index) => {
        arr[index] = state[index * 10]?.cluster_num;
      });
      return arr;
    });
  }, [state]);

  useEffect(() => {
    //console.log(box);
    setToggle([...Array(box).fill(false), true, ...Array(9 - box).fill(false)]);
  }, [box]);

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
        const count = data.length / 3;
        let temp = Array(count).fill(0);
        Array(count)
          .fill(0)
          .map((item, index) => {
            const t = {
              index: String(index + 1),
              keyword: ["-1"],
              count: [-1],
            };
            temp[index] = t;
          });
        setKeyword(temp);
        data.map((item: any, index: any) => {
          setKeyword((old) => {
            const now = Number(item.subject_num) - 1;
            //console.log(now);
            const arr = [
              ...old?.slice(0, now),
              {
                index: String(now),
                keyword: [...old[now]?.keyword, item.keyword],
                count: [...old[now]?.count, Number(item.freq)],
              },
              ...old?.slice(now + 1),
            ];
            return arr;
          });
        });
      });
  }, []);

  //console.log(keyword);
  console.log(num);

  return (
    <>
      <Wrapper>
        <Head>이슈 클러스터링</Head>
        <NumNews>
          분석뉴스 <Num>6000+α</Num>
          <p>건</p>
          의견분류 <Num>{state.length / 10}</Num>
          <p>건</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>
          {date[0] + "년 " + date[1] + "월 " + date[2] + "일 "} 12:00
        </Nownews>

        <SliderBox>
          <Slider {...settings}>
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <Box
                  key={index}
                  backColor={toggle[index]}
                  onClick={() => {
                    setBox(index);
                  }}
                >
                  <Title>{state[index * 10]?.headline}</Title>
                  <span>{state[index * 10]?.press}</span>
                </Box>
              ))}
          </Slider>
        </SliderBox>
        <NewsBox>
          <News>
            <a href={state[box * 10 + 1]?.news_link} target="_blank">
              <MainLeft>
                <Img url={state[box * 10 + 1]?.image_link}></Img>
                <Press>{state[box * 10 + 1]?.press}</Press>
                <Header>{state[box * 10 + 1]?.headline}</Header>
              </MainLeft>
            </a>
            <MainRight>
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <a href={state[box * 10 + index]?.news_link} target="_blank">
                    <Item key={index}>
                      <Title2>{state[box * 10 + index]?.headline}</Title2>
                      <Press2>{state[box * 10 + index]?.press}</Press2>
                    </Item>
                  </a>
                ))}
            </MainRight>
          </News>
          <Side>
            <WeatherBox>
              <Now>
                오늘의 날씨
                <span>
                  {date[0] + "년 " + date[1] + "월 " + date[2] + "일"}
                </span>
              </Now>
              <Weather />
            </WeatherBox>
            <KeyWord>
              <ApexCharts
                type="bar"
                options={{
                  xaxis: {
                    categories: keyword?.[Number(num[box]) - 1]?.keyword.slice(
                      1,
                      4
                    ),
                  },
                  yaxis: {
                    show: false,
                  },
                  plotOptions: {
                    bar: {
                      distributed: true,
                    },
                  },
                  colors: ["#0458e6", "#048fe6", "#04AAE6"],
                }}
                series={[
                  {
                    name: "키워드 수",
                    data: keyword?.[Number(num[box]) - 1]?.count.slice(1, 4),
                  },
                ]}
              ></ApexCharts>
            </KeyWord>
          </Side>
        </NewsBox>
      </Wrapper>
    </>
  );
};

export default Clustering;
