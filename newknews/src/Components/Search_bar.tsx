import styled from "styled-components";
import axios from 'axios'
import React, {useState, useEffect} from "react";



const Search_bar=()=>{
    const [data, setData] =useState({listNews:[] })
    const [query, setQuery] =useState('')

    useEffect(()=>{
        geturl();
        let completed = false;
        async function get(){
            const result = await(axios(`http://localhost:8080/getNewsTitle?title=${query}`))
            console.log(result)
            if(!completed){
                setData(result.data);
            }
          
        }
        get()
        return () => {
            completed = true
        }
        
    },[query]);
    async function  geturl () {
        await axios
        .get(`http://localhost:8080/getNewsTitle?title=${query}`)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return(
        <>
            <input value={query}
                onChange={e => setQuery(e.target.value)} />
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
