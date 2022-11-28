import "./Header.css";


function Header({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Header;
