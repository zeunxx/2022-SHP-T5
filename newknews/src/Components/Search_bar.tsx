import styled from "styled-components";
import axios from 'axios'
import React, {useState, useEffect} from "react";
// import searchBtn from '../Style/search.css';


const Search_bar=(props:any)=>{
    const [data, setData] =useState({listNews:[] })
    const [query, setQuery] =useState('')
    
    
    useEffect(()=>{
        geturl()
    },[props.search_content]);




    async function  geturl () {
        let completed = false;
        await axios
        .get(`http://localhost:8080/getNewsTitle?title=${props.search_content}`)
        .then((response)=>{
            console.log(response.data);
            setData(response.data);

        })
        .catch((error)=>{
            console.log(error);
            console.log(props.name)
        });

    }
    return(
        <>
        {props.search_content}
        <ul>
                 {data.listNews.map(item =>(  
                    <li>
                        {/* {item.title} */}
                        <a href={item.url}>{item.title}</a> 
                    </li>
                ))}
            </ul>
        </>
        
    )
}

export default Search_bar;
