import styled from "styled-components";
import { useEffect, useState } from "react";
import SimpleKeyword from "./SimpleKeyword";

const Wrapper = styled.div`
  //background-color: #f5f5cb;
  height: 320px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  margin-bottom: 300px;
  position: relative;
`;

const TopLeftBox = styled.div`
  //background-color: #ef9e9e;
  height: 30%;
  width: 35%;
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

const BottomLeftBox = styled.div`
  //background-color: aliceblue;
  //border: 1px solid #c4c4c4;
  height: 70%;
  width: 39%;
  bottom: 0;
  position: absolute;
`;

const KeywordBox = styled.div`
  //background-color: #dbebfb;
  height: 100%;
  width: 100%;
`;

const RightBox = styled.div`
  //background-color: orange;
  border: 1px solid #c4c4c4;
  float: right;
  height: 100%;
  width: 60%;
`;

const testkeyword = [
  { index: 1, keyword: ["폴란드", "우크라", "나토"], count: [127, 43, 21] },
  { index: 2, keyword: ["수능", "코로나", "2023"], count: [101, 78, 23] },
  { index: 3, keyword: ["명단", "이태원", "민주당"], count: [87, 53, 44] },
  { index: 4, keyword: ["이준석", "팔짱", "장경태"], count: [119, 94, 52] },
  {
    index: 5,
    keyword: ["정진상", "민주당", "구속영상"],
    count: [89, 23, 22],
  },
  { index: 6, keyword: ["백신", "고궁", "확진"], count: [93, 85, 45] },
  {
    index: 7,
    keyword: ["노웅래", "압수수색", "검찰"],
    count: [39, 32, 23],
  },
  {
    index: 8,
    keyword: ["트럼프", "은퇴자", "민주당"],
    count: [65, 52, 24],
  },
  { index: 9, keyword: ["이상민", "경찰", "특수본"], count: [99, 76, 36] },
  {
    index: 10,
    keyword: ["국회", "행안위", "전액삭감"],
    count: [100, 76, 54],
  },
];

const keyword = () => {
  let result = [{ name: "test", value: 0 }];
  testkeyword.map((item) => {
    result = [
      ...result,
      { name: item.keyword[0], value: item.count[0] },
      { name: item.keyword[1], value: item.count[1] },
      { name: item.keyword[2], value: item.count[2] },
    ];
  });
  return result;
};

function Keyword() {
  //console.log(keyword());
  const [state, setState] = useState(keyword().slice(1, 11));
  //console.log(state);
  return (
    <Wrapper>
      <RightBox></RightBox>
      <TopLeftBox>
        <Title>오늘의 키워드</Title>
        <NumNews>
          전체키워드 <Num>1227</Num>
          <p>개</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>2022.11.21(월) 08:00 ~ 17:00
        </Nownews>
      </TopLeftBox>

      <BottomLeftBox>
        <KeywordBox>
          <SimpleKeyword />
        </KeywordBox>
      </BottomLeftBox>
    </Wrapper>
  );
}

export default Keyword;
