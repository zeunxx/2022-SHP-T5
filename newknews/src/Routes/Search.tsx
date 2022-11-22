import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  //console.log(location);
  //location.state로 검색어 넘겨줍니다!
  return <div>{location.state}</div>;
}
export default Search;
