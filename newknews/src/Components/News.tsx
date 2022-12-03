import styled from "styled-components";
import { useEffect,useState } from "react";

const NewsWrapper = styled.div`
  width: 1000px;
  min-width: 800px;
  text-align: center;
  margin: 0px auto;
`;
const PositiveNews = styled.div`
  width: 500px;
  background-color: #DCDCDC;
  float: left;
`;
const NegativeNews = styled.div`
  width: 500px;
  background-color: #CDCDCD;  
  float: right;
`;
const EachNews = styled.div`
	width: 500px;
	height: 100px;
	// background-color: #DCDCDC;
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
const Line = styled.div`
  width: 500px;
  float: left;
  height: 1px;
  background-color: black;
  z-index: 2;
`

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

  const [newsCount,setCount] = useState(1);
  useEffect(() => {
    setCount(newsCount+1);
    console.log(newsCount);
  },[]) 
  
  

  return (
    <>      
			<NewsWrapper>        
        <PositiveNews>
          {data.map((item: any) => (                               
            <>
              <div>
                {
                  item.discuss==="1"?                    
                    <><EachNews>
                      <EachNewsTitle>
                        <p>긍정</p>
                        <p>{item.press}</p>
                        <a href={item.news_link} target='_blank'>{item.headline}</a>
                      </EachNewsTitle>
                      <EachNewsImg>
                        <img src={item.image_link} />
                      </EachNewsImg>
                    </EachNews><Line></Line></>                    
                  :
                    null
                }
              </div>   
              {/* <div>
                {
                  newsCount%10==2 ? <Line></Line> : null
                }
              </div>             */}
            </>                                     
          ))}
        </PositiveNews>
        <NegativeNews>
        {data.map((item: any) => (                               
            <>
              <div>
                {
                  item.discuss==="0"?
                    <><EachNews>
                    <EachNewsTitle>
                      <p>부정</p>
                      <p>{item.press}</p>
                      <a href={item.news_link} target='_blank'>{item.headline}</a>
                    </EachNewsTitle>
                    <EachNewsImg>
                      <img src={item.image_link} />
                    </EachNewsImg>
                  </EachNews><Line></Line></>
                  :
                    null
                }
              </div>
              <div>
                {
                  // newsCount%10===2 ? <Line></Line> : null
                }
              </div>              
            </>                                                 
          ))}
        </NegativeNews>        
			</NewsWrapper>
    </>
  );
}

export default News;
