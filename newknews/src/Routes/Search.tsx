import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NowRank from "../Slider/NowRank";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import React, { useEffect } from "react";
import { getModeForUsageLocation } from "typescript";

const Wrapper = styled.div`
  height: 450px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  //   background-color: #89b2e9;
`;
const HdTop = styled.div`
  //background-color: #70b4b0;
  height: 120px;
  width: 1000px;
  display: table-cell;
  vertical-align: middle;
`;

const Logo = styled.div`
  //background-color: #b48f8f;
  height: 38px;
  float: left;
  img {
    height: 100%;
  }
`;

const SearchBox = styled.form`
  width: 370px;
  height: 42px;
  //background-color: #efeeff;
  float: right;
`;

const Bar = styled.input`
  width: 250px;
  height: 42px;
  padding-left: 20px;
  border: 1px solid #0475e6;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  float: left;
  &:focus {
    outline: none;
    border: 2px solid #0475e6;
  }
`;

const SearchBtn = styled.div`
  width: 50px;
  height: 42px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #0475e6;
  float: left;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  svg {
    //background-color: #785151;
    fill: #e0e0e0;
    height: 50%;
    width: 50%;
  }
`;

const SearchHp = styled.div`
  width: 60px;
  height: 42px;
  border: 1px solid #0475e6;
  border-radius: 5px;
  background-color: #f7faff;
  float: right;
  text-align: center;
  p {
    color: #0475e6;
    font-size: 11px;
    font-weight: 500;
  }
`;

const Icon = styled.svg`
  margin-top: 3px;
  fill: #0475e6;
  height: 15px;
  width: 15px;
`;

const TestBox = styled.div<{ url: string }>`
  border-radius: 10px;
  width: 120px;
  height: 80px;
  background-color: #89b2e9;
  float: left;
  margin-right: 10px;
  object-fit: cover;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const BoxWrapper = styled.div`
  //background-color: #b19fc1;
  height: 110px;
  width: 1000px;
  vertical-align: middle;
`;

const Headline = styled.div`
  font-weight: bold;

  font-size: 20px;
  margin-left: 10px;
  vertical-align: middle;
`;

const Press = styled.div`
  float: left;
  font-weight: bold;
  font-size: 15px;
  margin-top: 4px;
  vertical-align: middle;
  color: #808080;
`;

const Subject = styled.div`
  float: left;
  font-weight: bold;
  font-size: 15px;
  margin-top: 1px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin-left: 5px;
  vertical-align: middle;
  // color: #000000;
  // background-color: #89b2e9;
`;
const Content = styled.div`
  float: none;
  font-size: 15px;
  margin-left: 15px;
  vertical-align: middle;
  color: #000000;
`;

const Searchdiv = styled.div``;
const Box = styled.div`
  margin: 0px auto;
  min-width: 800px;
  float: none;
  // background-color: #89b2e9;
  margin-bottom: 20px;
`;

interface IForm {
  state: string;
}

function Search(props: any) {
  const location = useLocation();
  const [state, setState] = useState("default");
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [data, setData] = useState({ listNews: [] });

  useEffect(() => {
    fetch(`/getNewsTitle?title=${location.state}`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "User-Agent": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      {/* <Search_bar search_content={location.state} /> */}
    </>
  );
}
export default Search;
