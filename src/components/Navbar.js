import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, theme, onThemeChange, themeConfig }) => {
  const themeIcons = {
    light: '☀',
    darkGrey: '⬛',
    darkBlue: '📘',
    darkGreen: '🌲',
    darkPurple: '🔮',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: themeConfig[theme].backgroundColor, color: themeConfig[theme].color }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: themeConfig[theme].color }}>
          {title}
        </a>
        <div className="d-flex">
          {Object.keys(themeIcons).map((key) => (
            <button
              key={key}
              style={{ margin: '0 5px', backgroundColor: themeConfig[key].backgroundColor, color: themeConfig[key].color, border: 'none', cursor: 'pointer' }}
              onClick={() => onThemeChange(key)}
            >
              {themeIcons[key]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default Navbar;
