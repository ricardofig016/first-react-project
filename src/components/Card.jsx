import profilePic from "../assets/profilepic.jpeg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" />
      <h2>Ricardo</h2>
      <p>Computer Science</p>
    </div>
  );
}
export default Card;
