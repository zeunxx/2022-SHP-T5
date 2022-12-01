import styled from "styled-components";

import Header from "../Components/Header";
import IssueDetail from "../Components/IssueDetail";
import News from "../Components/News";

const Wrapper = styled.div`
  width: 1000px;
  min-width: 800px;
  margin: 0px auto;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
`;

function Detail() {
  return (
    <>
    <Header />
    <IssueDetail />
    <Wrapper>
      <Title>전체기사</Title>
    </Wrapper>
    <News />
    </>
    )
  }
export default Detail;
