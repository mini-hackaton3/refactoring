import React, { useState, useEffect, useRef } from "react";
import { getCommentApi, postCommentApi } from "../assets/Api_test";
import axios from "axios";

import {
  CommentWrapper,
  CommentInputSection,
  CommentInput,
  SubmitButton,
  CommentSection,
  CommentDiv,
  TextArea,
  AvatarImg,
  CommentAuthor,
  CommentContent,
} from "../styles/Detail/CommentStyles";

const Comment = ({ movieTitle }) => {
  const [commentData, setCommentData] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const [sample, setSample] = useState([
    { id: 1, username: "kimmuksa", post: "wow so fun!!" },
    { id: 2, username: "민규", post: "되니!!" },
  ]);

  const replInput = useRef();

  const onChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://127.0.0.1:8000/comment/get_reply`, {
          title_kor: movieTitle,
        });
        setCommentData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const postComment = () => {
    // axios
    // 	.post(
    // 		`https://4026148c-8461-4a65-bbb5-bafce3e2e199.mock.pstmn.io/movie/comments/${movieID}`,
    // 		{
    // 			id: 2,
    // 			name: "민규",
    // 			post: comment,
    // 		}
    // 	)
    // 	.then(() => {
    // 		console.log("성공");
    // 		console.log(commentData);
    // 	});
    const newComment = sample.concat({
      id: sample.length + 1,
      username: "민규",
      post: comment,
    });
    setSample(newComment);
    alert("success");
  };

  return (
    <CommentWrapper>
      <div>한줄평</div>
      <CommentInputSection>
        <CommentInput
          type="text"
          placeholder="댓글을 입력하세요."
          size="100"
          onChange={onChange}
          ref={replInput}
        />
        <SubmitButton onClick={postComment}>작성</SubmitButton>
      </CommentInputSection>
      <CommentSection>
        {sample.map((s) => (
          <div>
            {s.username} : {s.post}
          </div>
        ))}
      </CommentSection>
    </CommentWrapper>
  );
};

export default Comment;
