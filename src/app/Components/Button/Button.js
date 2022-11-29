import "./Button.css";

function Button({ className = "", text, children, type, onClick, id, style }) {
  const styleClass = { outline: "Button--outline" }[style] || "";
  const classes = ["Button", styleClass, className].filter(Boolean).join(" ");

  return (
    <button className={classes} type={type} onClick={onClick} id={id}>
      {children} {text}
    </button>
  );
}

export default Button;
