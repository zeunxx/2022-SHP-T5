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
  cluster_num: string;
  subject: string;
  headline: string;
  content: string;
  press: string;
  image_link: string;
  news_link: string;
  discuss: string;
}

const NowRank = () => {
  const [data, setData] = useState<IProp[]>([]);

  useEffect(() => {
    let temp = [
      {
        cluster_num: "0",
        subject: "test",
        headline: "test",
        content: "test",
        press: "test",
        image_link: "test",
        news_link: "test",
        discuss: "test",
      },
    ];
    fetch(`/getNews`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "User-Agent": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.length / 10);
        let count = 0;
        data.map((item: any, index: any) => {
          if (index % 10 === 0) {
            //console.log(item);
            temp = [...temp, item];
          }
          //console.log(temp);
        });
        //console.log(temp.slice(1));
        setData(temp.slice(1));
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
      {data.map((item, index) => (
        <Item key={index + 1}>
          <Index>{String(index + 1) + ". "}</Index>
          <Title>{item.headline}</Title>
        </Item>
      ))}
    </Slider>
  );
};

export default NowRank;
