import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpensr
          <i className="fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a
            href="https://github.com/reynaldysaputra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;