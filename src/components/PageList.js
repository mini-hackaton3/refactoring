import React from "react";

import { PageListDiv, PageNumberDiv } from "../styles/Main/MainStyles";

const PageList = ({ pages }) => {
  return (
    <PageListDiv>
      {pages.map((pageNum) => (
        <PageNumberDiv key={pageNum}>{pageNum}</PageNumberDiv>
      ))}
    </PageListDiv>
  );
};

export default PageList;
