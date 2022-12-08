import "./Footer.css";
import group from "../../images/credit.png";

function Footer() {
  return (
    <div className="footer">
      <p>We care about your entertainment.Copyright © 2019–2021 felix.com</p>
      <img src={group} className="group" alt="group" />
    </div>
  );
}

export default Footer;
