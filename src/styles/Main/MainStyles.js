import styled from "styled-components";

export const SeachDiv = styled.div`
   {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    width: 1000px;
  }
`;

export const SearchInput = styled.input`
   {
    width: 300px;
    height: 1.5rem;
  }
`;

export const MainWrap = styled.div`
   {
    width: 1000px;
    // background-color: red;
    width: 1000px;
    margin: 0 auto;
  }
`;

export const MovieListDiv = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    //background-color: blue;
    justify-content: center;
  }
`;

export const MovieDiv = styled.div`
   {
    width: 200px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
  }
`;

export const MovieImg = styled.div`
   {
    overflow: hidden;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const MovieTitleDiv = styled.div`
   {
    border-top: 1px solid lightgray;
    text-align: center;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MovieTitle = styled.div`
   {
    background-color: white;
  }
`;

export const PageListDiv = styled.div`
   {
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

export const PageNumberDiv = styled.div`
   {
    width: 10px;
    padding: 5px;
  }
`;

export const LoadingDiv = styled.div`
   {
    width: 100px;
    height: 200px;
    margin: 0 auto;
  }
`;
