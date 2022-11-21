import Search_bar from "../Components/Search_bar";
import Header from "../Components/Header";
import Issue from "../Components/Issue";
import Today from "../Components/Today";



function Search(props:any){
    return (
    <>
    {/* <Search_bar search_content={props.서치내용}/> */}
    <Search_bar search_content={"서울시"}/>
    </>
    );
}
export default Search;