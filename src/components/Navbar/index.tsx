import { DarkModeIcon, LightModeIcon } from "assets/icons";
import { useTheme } from "context";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="navbar">
      <Link to="./index.html" className="logo">
        Gimesto
        <span className="logo-yellow">Quiz</span>
      </Link>
      <div className="right-cont">
        {theme === "light" ? (
          <button className="theme-btn" onClick={() => setTheme("dark")}>
            <DarkModeIcon />
          </button>
        ) : (
          <button
            className="theme-btn light-btn"
            onClick={() => setTheme("light")}
          >
            <LightModeIcon />
          </button>
        )}
        <Link to="#" className="btn btn-primary">
          Log in
        </Link>
      </div>
    </nav>
  );
};
