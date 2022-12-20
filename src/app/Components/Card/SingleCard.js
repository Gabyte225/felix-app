import "./Card.css";

function SingleCard({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default SingleCard;