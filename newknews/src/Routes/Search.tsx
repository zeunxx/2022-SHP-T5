import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Search_bar from "../Components/Search_bar";

function Search() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Search_bar search_content={location.state} />
    </>
  );
}
export default Search;
