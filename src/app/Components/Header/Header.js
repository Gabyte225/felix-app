import "./Header.css";
import Flogo from "../../images/F.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={Flogo} className="logo" alt="logo" />
      <Button>
        <Link className="button-login-link" to="/login">Sign in</Link>
      </Button>
    </div>
  );
}

export default Header;
