import styled from "styled-components";
import axios from 'axios'
import React, {useState, useEffect} from "react";

<style>
    {/* .Image{
        width: 300px;
        height: 300px;
        border: 2px solid;
    } */}

</style>
const Wrapper = styled.div`
  height: 450px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
//   background-color: #89b2e9;
`;
const TestBox = styled.div`
    border-radius: 10px;
    width: 150px;
    height: 100px;
    background-color: #89b2e9;
    float: left;
    margin-right:10px;
    object-fit: cover;
    background-size: cover;
    background-image: url("http://t1.daumcdn.net/news/202211/16/kukinews/20221116162907149rhee.jpg");
`;
const BoxWrapper = styled.div`
  //background-color: #b19fc1;
  height: 120px;
  width: 1000px;
  vertical-align:middle;

`;
const Img = styled.div<{ url: string }>`
  width: 100%;
  height: 55%;
  border-radius: 15px;
  background-image: url("http://t1.daumcdn.net/news/202211/16/kukinews/20221116162907149rhee.jpg");
  background-size: cover;
  float:left;
`;

const Headline = styled.div`
    font-weight:bold;

    font-size: 20px;
    margin-left: 10px;
    vertical-align: middle;
`;
const Search = styled.div`
    font-weight:bold;
    font-size: 20px;
    margin-left: 10px;
    color:#0008088;
`;
const Press = styled.div`
    float:none;
    font-size: 15px;
    margin-left: 10px;
    vertical-align: middle;
    color:#808080;
`;

const Search_bar=(props:any)=>{
    const [data, setData] =useState({listNews:[]})
    
    useEffect(()=>{
        geturl()
    },[]);
    

    async function  geturl () {
        let completed = false;
        await axios
        .get(`http://localhost:8000/getNewsTitle?title=${props.search_content}`)
        .then((response)=>{
            console.log(response.data)
            setData(response.data);
            
        })
        .catch((error)=>{
            console.log(error);
            console.log(props.name)
        });

    }
    return(
        <>
        <Search>{props.search_content}</Search> 뉴스 검색 결과 건입니다.
        <Wrapper>
            <ul>
                {data.listNews.map(item =>(  
                        <li>
                            <BoxWrapper>
                                <div><TestBox></TestBox></div>
                                <div>
                                    <Headline><a href={item['news_link']}>{item['headline']}</a> </Headline>
                                    <Press>{item['press']}</Press>
                                </div>
                            </BoxWrapper>
                        </li>

                ))}
            </ul>
        </Wrapper>
            
        </>
        
    )
}

export default Search_bar;
