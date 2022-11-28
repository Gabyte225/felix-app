import "./Button.css";

function Button({ className, text, children, type, onClick, key }) {
  return (
    <button className={className} type={type} onClick={onClick} key={key}>
      {children} {text}
    </button>
  );
}

export default Button;
