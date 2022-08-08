import React from "react";
import { getMovieApi } from "../assets/Api_test";
import { useEffect, useState } from "react";

import { SearchInput, SeachDiv, MainWrap } from "../styles/Main/MainStyles";

import MovieList from "./MovieList";
import PageList from "./PageList";

import Spinner from "react-bootstrap/Spinner";
import { LoadingDiv } from "./../styles/Main/MainStyles";

const Main = () => {
  const [moviesData, setMoviesData] = useState([]);
  //const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]); // 페이지 배열
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await getMovieApi();

        console.log(response);
        //pages 관리
        const lastPage = Math.ceil(response.length / 30);
        console.log(lastPage);
        const tempPages = [];
        for (let i = 1; i <= lastPage; i++) {
          tempPages.push(i);
        }
        setPages(tempPages);

        // movieData 관리
        setMoviesData(response); // [{},{},...] 원래는 response.data였음
        console.log(moviesData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const onChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      const SearchMovie = moviesData.filter(
        (movie) => movie.title_kor === query
      );
      setMoviesData(SearchMovie);
      setQuery("");
      e.target.vlaue = "";
    }
  };

  return (
    <MainWrap>
      <SeachDiv>
        <SearchInput
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder="Ex)인셉션"
        />
      </SeachDiv>
      {loading ? (
        <LoadingDiv>
          <Spinner animation="border" />
        </LoadingDiv>
      ) : moviesData.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <>
          <MovieList moviesData={moviesData} />
          <PageList pages={pages} />
        </>
      )}
    </MainWrap>
  );
};

export default Main;
