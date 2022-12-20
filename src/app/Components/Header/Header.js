import "./Header.css";
import Flogo from "../../images/F.png";


function Header({ children }) {
  return (
    <div className="header">
      <img src={Flogo} className="logo" alt="logo" />
      {children}
    </div>
  );
}

export default Header;
