import "./Card.css";

function Card({ className, children, singleMovie }) {
  return (
    <div className={className} singleMovie={singleMovie}>
      {children}
    </div>
  );
}

export default Card;
