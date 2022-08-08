import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentInputSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  margin-right: 0.5rem;
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 3rem;
  width: 5rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const CommentDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const AvatarImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const CommentAuthor = styled.div`
  font-weight: 600;
`;
export const CommentContent = styled.div``;
