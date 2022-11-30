import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Item = styled.div`
  //background-color: #634e95;
  height: 42px;
  line-height: 42px;
  text-align: center;
`;

const Index = styled.p`
  display: inline;
  color: #e67404;
  font-size: 11px;
  font-weight: 500;
`;

const Title = styled.p`
  width: 200px;
  //background-color: #a7c7e3;
  display: inline-block;
  max-width: 200px;
  color: black;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
`;

export interface IProp {
  index: number;
  title: string;
  url: string;
  press: string;
}

const NowRank = (prop: IProp[]) => {
  const [data, setData] = useState(prop);
  useEffect(() => {
    //console.log(data);
    Object.values(data).map((value, i) => {
      //console.log(value);
    });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    vertical: true,
    arrows: false, //Previous 버튼 제거
  };

  return (
    <Slider {...settings}>
      {Object.values(data).map((value, i) => (
        <Item key={i + 1}>
          <Index>{value.index + ". "}</Index>
          <Title>{value.title}</Title>
        </Item>
      ))}
    </Slider>
  );
};

export default NowRank;
