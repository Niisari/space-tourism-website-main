import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 48 48"
          className="logo"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <button
          className="nav__toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            /* Close Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </button>
      </div>

      <div className="line"></div>

      <ul className={`nav__list ${isOpen ? "nav__list--visible" : ""}`}>
        <li className="nav__item">
          <a href="/">
            <span className="nav__number home">00</span>Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/destination">
            {" "}
            <span className="nav__number">01</span> Destination
          </a>
        </li>
        <li className="nav__item">
          <a>
            <span className="nav__number">02</span> Crew
          </a>
        </li>
        <li className="nav__item">
          <a>
            <span className="nav__number">03</span> Technology
          </a>
        </li>
      </ul>
    </nav>
  );
}
