import styled from "styled-components";

const Wrapper = styled.div`
  height: 5vh;
  font-size: 4vh;
  width: 98vw;
  margin: 1vw;
  text-align: center;
  background-color: yellow;
`;
const Center = styled.div`
  width: 100vw;
  height: auto;
  text-align: center;
  background-color: brown;
`;
const LeftIframe = styled.div`
  float: left;
  background-color: yellow;
  width: 48vw;
  margin: 1vw;
`;
const RightIframe = styled.div`
  float: right;
  background-color: yellow;
  width: 48vw;
  margin: 1vw;
`;
const ImageWrapper = styled.div`
  float: left;
  margin: 1vw;
  width: 8vw;
  height: auto;
  img{
    width: 8vw;
    height: 4vw;
  }
`;
const HeadlineWrapper = styled.div`
  float: right;
  margin: 1vw;
  width: 36vw;
  height: auto;
  text-align: left;

  &.hover {
    background-color: white;
  }
`;
function MouseClickEvent0(){
  window.open(articleLink[0]);
}
function MouseClickEvent1(){
  window.open(articleLink[1]);
}
function MouseClickEvent2(){
  window.open(articleLink[2]);
}
function MouseClickEvent3(){
  window.open(articleLink[3]);
}
function MouseClickEvent4(){
  window.open(articleLink[4]);
}
function MouseClickEvent5(){
  window.open(articleLink[5]);
}

// async function get(){
//   const result = await
// }

let headline:string[] = [
  '김대기, 어쩌구 저쩌구',
  '김대기, 저쩌구 어쩌구',
  '서울 합동분향소에 6일간 추모객 11여 명 다녀가',
  '서울 합동분향소, 6일간 11만명 방문[이태원 핼러윈 참사]',
  '옐런 美재무, "강달러 세계적 여파 인정…개도국 부채 우려',
  '홍콩H지수, 6000선 회복…中방역 완화·부동산 조치 영향'
]
let articleLink:string[] = [
  'https://v.daum.net/v/20221105203122210',
  'https://v.daum.net/v/20221105202512181',
  'https://news.kbs.co.kr/news/view.do?ncd=5594545',
  'https://m.khan.co.kr/national/national-general/article/202211052028001',
  'https://v.daum.net/v/20221114155323264',
  'https://v.daum.net/v/20221114154435808'
]
let imageFiles:string[] = [
  'https://cdn.rozeus.com/mediaLogo/rectangle/aa007.gif',
  'https://img.segye.com/content/image/2022/11/09/20221109502974.jpg',
  'https://thumb.mt.co.kr/06/2022/11/2022110609562389716_1.jpg/dims/optimize/',
  'https://image.imnews.imbc.com/news/2022/society/article/__icsFiles/afieldfile/2022/11/13/n-221112-05.jpg',
  'https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/14/yonhap/20221114155323832micr.jpg',
  'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/14/Edaily/20221114154438854fhmp.jpg'
]

function Detail() {
  return (
    <>
    <Wrapper>
      이슈 vs 이슈
    </Wrapper>
    <Center>

      <LeftIframe>
        Type A
      </LeftIframe>
      <RightIframe>
        Type B
      </RightIframe>

      <LeftIframe>
        <ImageWrapper>
          <img src={imageFiles[0]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent0}>
        {headline[0]}
        </HeadlineWrapper>
      </LeftIframe>

      <RightIframe>
        <ImageWrapper>
          <img src={imageFiles[1]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent1}>
        {headline[1]}
        </HeadlineWrapper>
      </RightIframe>

      <LeftIframe>
        <ImageWrapper>
          <img src={imageFiles[2]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent2}>
          {headline[2]}
        </HeadlineWrapper>
      </LeftIframe>

      <RightIframe>
        <ImageWrapper>
        <img src={imageFiles[3]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent3}>
          {headline[3]}
        </HeadlineWrapper>  
      </RightIframe>

      <LeftIframe>
        <ImageWrapper>
          <img src={imageFiles[4]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent4}>
          {headline[4]}
        </HeadlineWrapper>
      </LeftIframe>

      <RightIframe>
        <ImageWrapper>
        <img src={imageFiles[5]}/>
        </ImageWrapper>
        <HeadlineWrapper onClick={MouseClickEvent5}>
          {headline[5]}
        </HeadlineWrapper>  
      </RightIframe>







      <LeftIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105203122210"/> */}
      </LeftIframe>
      <RightIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105202512181"/> */}
      </RightIframe>
      <LeftIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105203122210"/> */}
      </LeftIframe>
      <RightIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105202512181"/> */}
      </RightIframe>
    </Center>
    </>
  );
}

export default Detail;
