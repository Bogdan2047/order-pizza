import { NavLink } from "react-router-dom";
import "./css/footer.css";

export const Footer = () => {
  return (
    <div className="footer-btn">
      <NavLink to="/blog">
        <button className="btn btn-primary">Blog</button>
      </NavLink>
    </div>
  );
};
