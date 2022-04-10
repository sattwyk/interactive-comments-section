import Avatar from "../assets/avatars/image-juliusomo.png";
import "./AddComments.css";

export default function AddComments() {
  return (
    <div className="container">
      <img className="avatar" src={Avatar} alt="User Avatar" />
      <textarea className="text" placeholder="Add a Comment..." />
      <div className="send-btn">Send</div>
    </div>
  );
}
