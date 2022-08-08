import styled from "styled-components";

export const HeaderDiv = styled.div`
   {
    width: 100%;
    height: 50px;
    background-color: #f6f8fa;
    display: flex;
    align-items: center;
  }
`;

export const HeaderTitle = styled.div`
   {
    //background-color: blue;
    margin: 0 10px;
    font-size: 21px;
  }
`;

export const HeaderButtonDiv = styled.div`
   {
    display: flex;
    whidth: 50px;
  }
`;

export const HeaderLogin = styled.button`
   {
    background-color: white;
    color: black;
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }
`;

export const HeaderSignUp = styled.button`
   {
    background-color: white;
    color: black;
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }
`;
