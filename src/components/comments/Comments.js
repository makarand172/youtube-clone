import "./Comments.css";
import { FaUserCircle } from "react-icons/fa";
import { commentsData } from "./commentsData";

const CommentLayout = ({ data }) => {
  return (
    <div className="comment-layout-container">
      <FaUserCircle size={23} />
      <div className="comment-details">
        <h2>{data?.name}</h2>
        <h4>{data?.comment}</h4>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.name} className="comments-list-container">
          <CommentLayout data={comment} />
          <div className="comments-replies">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Comments = () => {
  return (
    <div className="comments-container">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;
