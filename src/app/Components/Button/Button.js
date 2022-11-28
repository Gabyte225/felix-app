import "./Button.css";

function Button({ className, text, children, type, onClick, id }) {
  return (
    <button className={className} type={type} onClick={onClick} id={id}>
      {children} {text}
    </button>
  );
}

export default Button;
