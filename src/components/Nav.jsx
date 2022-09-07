import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xxYawgFO1woBRveH7WL9D1BxB4W.jpg"
        alt="user logged"
        className="nav__avatar"
      />
    </nav>
  );
}
