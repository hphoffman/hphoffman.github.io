// NavBar.tsx
import React from "react";

interface NavBarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setActiveSection }) => {
  const handleNavItemClick = (
    section: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => handleNavItemClick("home", e)}
        >
          <b>HH</b>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/blog"
              onClick={(e) => handleNavItemClick("blog", e)}
            >
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/contact"
              onClick={(e) => handleNavItemClick("contact", e)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
