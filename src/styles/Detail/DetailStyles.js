import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: relative;

  width: 1024px;
  margin: 0 auto;
`;

export const MovieTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;
export const MovieTitle = styled.div`
  font-size: 1.5rem;
`;
export const MovieSubtitle = styled.div`
  font-size: 0.5rem;
  color: #a9a9a9;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const MovieInfoDetail = styled.div`
  display: flex;
`;
export const PosterImg = styled.img`
  width: 300px;
`;

export const TextContainer = styled.div`
  font-size: 0.5rem;
  margin: 0.5rem;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    align-items: left;
    margin-right: 0.5rem;
  }
`;
export const InfoContent = styled.div`
  font-size: 0.5rem;
  margin: 0.25rem;
`;
export const InfoTitle = styled(InfoContent)`
  width: 3rem;
  color: #a9a9a9;
`;

export const SummaryDiv = styled.div`
  font-size: 0.5rem;
  color: #a9a9a9;
`;

export const StaffInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
`;
export const StaffInfoContainer = styled.div`
  display: flex;
  align-items: left;
`;
export const StaffInfoDiv = styled.div`
  margin-right: 1rem;
`;
export const StaffImg = styled.img`
  width: 100px;
`;
