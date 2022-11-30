import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Issue from "../Components/Issue";
import Keyword from "../Components/Keyword";
import Today from "../Components/Today";

export interface IProp {
  cluster_num: string;
  subject: string;
  headline: string;
  content: string;
  press: string;
  image_link: string;
  news_link: string;
}

/* const countFun = () => {
  let count = 1;
  let preview = [{ index: 0, title: `test title`, url: "test", press: "test" }];
  testitem.map((item) => {
    if (item.index === count) {
      //console.log(item.index);
      preview = [...preview, item];
      count += 1;
    }
  });
  return preview.slice(1);
}; */

function Home() {
  let test = { listNews: [] };

  /* useEffect(() => {
    let count = 1;
    let p = [
      {
        cluster_num: "0",
        subject: "test",
        headline: "test",
        content: "test",
        press: "test",
        image_link: "test",
        news_link: "test",
      },
    ];
    data.listNews.map((item) => {
      if (item["cluster_num"] === String(count)) {
        //console.log(item.index);
        p = [...p, item];
        count += 1;
      }
    });
    setPreview(p.slice(1));
    console.log(preview);
  }, [data]); */

  /*   useEffect(() => {
    let count = 1;
    testitem.map((item) => {
      if (item.index === count) {
        //console.log(item.index);
        setPreview((old) => [...old, item]);
        count += 1;
      }
    });
    setPreview((old) => [...old.slice(1)]);
  }); */

  return (
    <>
      <Header />
      <Issue />
      <Today />
      <Keyword />
    </>
  );
}
export default Home;
