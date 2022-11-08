import styled from "styled-components";

const Wrapper = styled.div`
  height: 400px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  background-color: #89b2e9;
  //position: relative;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  background-color: #6182dc;
  //position: absolute;
  //top: 0px;
  //left: 0px;
`;

const BoxWrapper = styled.div`
  //position: absolute;
  //top: 30px;
  //left: 50px;
  background-color: blueviolet;
  height: 300px;
  width: 900px;
  margin: 20px auto;
`;

const Box = styled.div`
  background-color: #9898cb;
  height: 300px;
  width: 450px;
  float: left;
  text-align: center;
`;

const Img = styled.img<{ bgphoto: string }>`
  height: 200px;
  width: 350px;
  margin: 20px auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border: 0px;
`;

function Issue() {
  return (
    <>
      <Wrapper>
        <Title>오늘의 이슈</Title>
        <BoxWrapper>
          <Box>
            <Img bgphoto="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/07/ned/20221107134349902cive.jpg" />
          </Box>
          <Box>
            <Img bgphoto="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/07/segye/20221107134502243geks.jpg" />
          </Box>
        </BoxWrapper>
      </Wrapper>
    </>
  );
}
export default Issue;
