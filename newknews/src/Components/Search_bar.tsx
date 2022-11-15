import styled from "styled-components";
import axios from 'axios'
import React, {useState, useEffect} from "react";
// import searchBtn from '../Style/search.css';


const Search_bar=()=>{
    const [data, setData] =useState({listNews:[] })
    const [query, setQuery] =useState('')

    useEffect(()=>{
        
    },[query]);

    

    async function  geturl () {
        let completed = false;
        await axios
        .get(`http://localhost:8080/getNewsTitle?title=${query}`)
        .then((response)=>{
            console.log(response.data);
            setData(response.data);

        })
        .catch((error)=>{
            console.log(error);
        });

    }
    return(
        <>
            <input className="searchInput" value={query}
                onChange={e => setQuery(e.target.value)} />
            <button type="button" className="searchBtn" onClick={geturl}><span>검색</span></button>
            <ul>
                {data.listNews.map(item =>(  
                    <li >
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default Search_bar;
