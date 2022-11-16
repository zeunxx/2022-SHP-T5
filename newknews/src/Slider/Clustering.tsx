import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

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
  p {
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

const News = styled.div`
  //background-color: #8d79cb;
  border: 1px solid #c4c4c4;
  height: 330px;
  width: 680px;
  float: left;
`;

const Side = styled.div`
  //background-color: #d08c8c;
  border: 1px solid #c4c4c4;
  height: 330px;
  width: 300px;
  float: right;
`;

const testitem = [
  {
    index: 1,
    name: `윤 대통령 오늘부터 G20 일정... '한중 정상 만남' 가능성
    `,
    count: 102,
  },
  { index: 2, name: "'이태원 참사' 사망자 1명 늘어... 총 158명", count: 88 },
  {
    index: 3,
    name: `미, 우크라 협상 압박설에 "젤렌스키 권한" 선 그어`,
    count: 86,
  },
  {
    index: 4,
    name: `"바이든에 큰 승리" 美민주당, 상원 다수당 수성`,
    count: 76,
  },
  {
    index: 5,
    name: "현대차, 印尼(인도네시아)서 알루미늄 안정적 확보 나서",
    count: 56,
  },
  {
    index: 6,
    name: "검찰 '이재명 최측근' 정진상 15일 피의자 신분 소환",
    count: 52,
  },
  {
    index: 7,
    name: "FTX파산신청에 가상화폐 투자자들 혼돈",
    count: 34,
  },
  { index: 8, name: `한미일 '공동성명' 채택... 대북 압박 최고조`, count: 21 },
  { index: 9, name: "감염예방 2.6배... BA.5 개량백신 접종 시작", count: 19 },
  {
    index: 10,
    name: "내년도 전기요금 인상 불가피... 한전 사상 최대치 적자",
    count: 8,
  },
];

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

  const [box, setBox] = useState<number>(1);
  const [toggle, setToggle] = useState([true, ...Array(9).fill(false)]);

  useEffect(() => {
    console.log(box);
    setToggle([...Array(box).fill(false), true, ...Array(9 - box).fill(false)]);
    console.log(toggle);
  }, [box]);

  return (
    <>
      <Wrapper>
        <SliderBox>
          <Slider {...settings}>
            {testitem.map((item) => (
              <Box
                backColor={toggle[item.index - 1]}
                onClick={() => {
                  setBox(item.index - 1);
                }}
              >
                {item.name}
                <p>{item.count}건</p>
              </Box>
            ))}
          </Slider>
        </SliderBox>
        <NewsBox>
          <News>{box}</News>
          <Side></Side>
        </NewsBox>
      </Wrapper>
    </>
  );
};

export default Clustering;
