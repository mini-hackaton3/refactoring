import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailApi } from "../assets/Api_test";
import Comment from "./Comment";

import {
  DetailWrapper,
  MovieTitleDiv,
  MovieTitle,
  MovieSubtitle,
  MovieInfoWrapper,
  MovieInfoDetail,
  PosterImg,
  TextDiv,
  TextContainer,
  StaffInfoWrapper,
  StaffInfoContainer,
  StaffInfoDiv,
  StaffImg,
  InfoTitle,
  InfoContent,
} from "../styles/Detail/DetailStyles";

const Detail = () => {
  const [movieData, setMovieData] = useState([]);
  const movieID = useParams();

  // useEffect(() => {
  //   setMovieData(selected);
  // }, [selected]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDetailApi(movieID);
        console.log(response);
        setMovieData(response);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieID]);
  const {
    title_kor,
    title_eng,
    poster_url,
    rating_aud,
    rating_cri,
    rating_net,
    genre,
    showtimes,
    release_date,
    summary,
    staff,
  } = movieData;

  return (
    <DetailWrapper>
      <MovieTitleDiv>
        <MovieTitle>{title_kor}</MovieTitle>
        <MovieSubtitle>{title_eng}</MovieSubtitle>
      </MovieTitleDiv>
      <MovieInfoWrapper>
        <MovieInfoDetail>
          <PosterImg
            src={poster_url}
            style={{ width: "300px" }}
            alt={"moviePosterImg"}
          />
          <TextContainer>
            <TextDiv>
              <div>
                <InfoTitle>관람객 평점</InfoTitle>
                <InfoContent>{rating_aud}</InfoContent>
              </div>
              <div>
                <InfoTitle>평론가 평점</InfoTitle>
                <InfoContent>{rating_cri}</InfoContent>
              </div>
              <div>
                <InfoTitle>네티즌 평점</InfoTitle>
                <InfoContent>{rating_net}</InfoContent>
              </div>
            </TextDiv>
            <TextDiv>
              <div>
                <InfoTitle>장르</InfoTitle>
                <InfoContent>{genre}</InfoContent>
              </div>
              <div>
                <InfoTitle>상영 시간</InfoTitle>
                <InfoContent>{showtimes}</InfoContent>
              </div>
              <div>
                <InfoTitle>개봉일</InfoTitle>
                <InfoContent>{release_date}</InfoContent>
              </div>
            </TextDiv>
            <TextDiv>
              <InfoTitle>줄거리</InfoTitle>
              <InfoContent>{summary}</InfoContent>
            </TextDiv>
          </TextContainer>
        </MovieInfoDetail>
        <StaffInfoWrapper>
          <InfoTitle>인물정보</InfoTitle>
          <StaffInfoContainer>
            {staff &&
              staff.map(({ name, role, image_url }) => (
                <StaffInfoDiv key={name}>
                  <StaffImg src={image_url} alt={"staffImg"} />
                  <InfoTitle>{role}</InfoTitle>
                  <InfoContent>{name}</InfoContent>
                </StaffInfoDiv>
              ))}
          </StaffInfoContainer>
        </StaffInfoWrapper>
      </MovieInfoWrapper>
      <Comment movieID={movieID} />
    </DetailWrapper>
  );
};

export default Detail;
