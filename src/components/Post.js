import { useState } from "react";

const Post = ({ post, profile }) => {
  const [dislike, setDislike] = useState("Like");
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [newCommentClick, setNewCommentClick] = useState(false);

  const like = () => {
    if (liked) {
      setLiked(false);
      setDislike("Dislike");
    } else {
      setLiked(true);
      setDislike("Like");
    }
  };

  const handleComment = () => {
    if (comment) {
      setComment(false);
    } else {
      setComment(true);
    }
  };

  const newComment = () => {
    setNewCommentClick(!newCommentClick);
    setComment(false);
  };

  return (
    <div className="post-panel-main flex">
      <div>
        <img src={profile} className="profile-post-img round" alt="" />
      </div>
      <div className="post-panel-second flex col">
        <div>
          <h3 className="fix2">Pateus Maximus III</h3>
          <p className="fix3">11/9/2011</p>
        </div>
        <div className="post-img-box">
          <img src={post} className="post-img" alt="" />
        </div>
        <div className="story-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="like-comment flex">
          <button className="btn-post" onClick={like}>
            {dislike}
          </button>
          <button className="btn-post" onClick={handleComment}>
            Comment
          </button>
        </div>

        {comment ? (
          <div className="comment-box">
            <textarea
              onChange={(e) => setCommentText(e.target.value)}
              className="comment-text"
              placeholder="Write a comment..."
              disabled={newCommentClick}
            ></textarea>
            <button
              className="btn-post"
              onClick={newComment}
              disabled={newCommentClick}
            >
              Post
            </button>
          </div>
        ) : null}
        {newCommentClick ? (
          <div className="comment-content-div">
            <p className="comment-content">{commentText}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
