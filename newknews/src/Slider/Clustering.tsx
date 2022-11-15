import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Box = styled.div`
  height: 70px;
  //background-color: #edabab;
  padding: 10px;
  border-left: 1px solid #c4c4c4;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  p {
    font-size: 11px;
    color: #818181;
    padding-top: 3px;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #c4c4c4;
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

  const [btnActive, setBtnActive] = useState();

  const BoxClick = (event: any) => {
    setBtnActive((prev) => {
      console.log(event.target.value);
      return event.target.value;
    });
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {testitem.map((item) => (
          <Box onClick={BoxClick}>
            {item.name}
            <p>{item.count}건</p>
          </Box>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Clustering;
