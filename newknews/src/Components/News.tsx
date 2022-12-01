import styled from "styled-components";
import { useEffect,useState } from "react";

const NewsWrapper = styled.div`
  width: 1000px;
  min-width: 800px;
  text-align: center;
  margin: 0px auto;
`;
// const ClusterNews = styled.div`
//   width: 1004px;
//   border: 2px solid black;
// `;
const PositiveNews = styled.div`
  width: 500px;
  background-color: #DCDCDC;
  padding: 20px;
`;
const NegativeNews = styled.div`
  width: 500px;
  background-color: #DCDCDC;
  padding: 20px;
  float: left;
`;
const EachNews = styled.div`
	width: 500px;
	height: 100px;
	background-color: #DCDCDC;
	float: left;
	padding: 20px;
`;
const EachNewsTitle = styled.div`
	width: 360px;
	height: 40px;
	line-height: 20px;
	text-align: left;
	float: left;
	a:hover {
		transition: color .5s;
		color: orange;
  }
`;
const EachNewsImg = styled.div`
	width: 100px;
	float: left;
	img {
		max-width: 100%;
		height: auto;
	}
`;

function News() {
  const [data, setData]: any = useState([]);
	useEffect(() => {
    fetch(`/getNews`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "User-Agent": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {      
        setData(data);
      });
  }, []);
  console.log(data)

  return (
    <>
			<NewsWrapper>        
        {data.map((item: any) => (          
            <>
              <div>{
              item.cluster_num === "1" ?
                <h1>넘버 1</h1> 
                : 
                <h1>넘버1이 아닙니다</h1>
              }</div>
              {/* <EachNews>
              <EachNewsTitle>
                <p>{item.press}</p>
                <a href={item.news_link} target='_blank'>{item.headline}</a>
              </EachNewsTitle>
              <EachNewsImg>
                <img src={item.image_link} />
              </EachNewsImg>
            </EachNews> */}
            </>
      ))}        
			</NewsWrapper>
    </>
  );
}

const junkData = [
  {
    headline: "",
    discuss: 1,
    press: "",
    news_link: "",
    image_link: "",
  },
  {
    headline: "",
    discuss: 1,
    press: "",
    news_link: "",
    image_link: "",
  }
  

];

export default News;