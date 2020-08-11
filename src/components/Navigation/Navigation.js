import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import navigationContent from "./navigationContent";

import "./navigation.scss";

const Navigation = () => {
  const { links } = navigationContent;
  const path = useLocation().pathname;

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation__links">
          {links.map((link) => (
            <Link
              key={link.displayName}
              className={
                path === link.path
                  ? "navigation__links-item isActive"
                  : "navigation__links-item"
              }
              to={link.path}
            >
              {link.displayName}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
