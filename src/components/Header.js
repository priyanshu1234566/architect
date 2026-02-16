import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assests/logo1.png";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setScrolled(window.scrollY > 50); // 👈 resize trigger
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    "home",
    "about",
    "services",
    "projects",
    "testimonials",
    "contact",

  ];

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
    setActive("home");
  };

  return (
    <header className={`header ${show ? "show" : "hide"}`}>
      <div className="container">
        {/* LOGO */}
        <div className={`logo ${scrolled ? "small" : ""}`} onClick={scrollToHome}>
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active" : ""}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
