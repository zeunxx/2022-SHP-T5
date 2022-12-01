import styled from "styled-components";
import Clustering from "../Slider/Clustering";

const Wrapper = styled.div`
  height: 470px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  margin-top: 30px;
  margin-bottom: 30px;
  //background-color: #89b2e9;
`;

function Today() {
  return (
    <>
      <Wrapper>
        <Clustering />
      </Wrapper>
    </>
  );
}

export default Today;
