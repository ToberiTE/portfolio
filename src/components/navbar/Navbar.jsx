import { Themetoggle } from "../themetoggle/Themetoggle";
import { useState, useRef, useEffect } from "react";
import style from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navStyle, setNavStyle] = useState(false);
  const [landingHref, setLandingHref] = useState(false);
  const [servicesHref, setServicesHref] = useState(false);
  const [workHref, setWorkHref] = useState(false);
  const [contactHref, setContactHref] = useState(false);

  useEffect(() => {
    const landing = document.getElementById("landing");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting
          ? setTimeout(() => setLandingHref(true), 800)
          : setLandingHref(false);
        setNavStyle(!el.isIntersecting);
      },
      { threshold: 0.75 }
    );
    observer.observe(landing);
    return () => observer.unobserve(landing);
  });

  useEffect(() => {
    const services = document.getElementById("services");
    const height = window.screen.height;
    const width = window.screen.width;
    var th = 1;
    height > width
      ? (th = 0.35)
      : height < 900
      ? (th = 0.2)
      : width > 1000
      ? (th = 0.75)
      : (th = 1);

    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting
          ? setTimeout(() => setServicesHref(true), 800)
          : setServicesHref(false);
      },
      { threshold: th }
    );
    observer.observe(services);
    return () => observer.unobserve(services);
  });

  useEffect(() => {
    const work = document.getElementById("work");
    const height = window.screen.height;
    const width = window.screen.width;
    var th = 1;
    (height > width) & (width < 700)
      ? (th = 0.65)
      : (height > width) & (width > 700)
      ? (th = 0.8)
      : height < 900
      ? (th = 0.2)
      : width > 1000
      ? (th = 0.85)
      : (th = 1);

    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting
          ? setTimeout(() => setWorkHref(true), 800)
          : setWorkHref(false);
      },
      { threshold: th }
    );
    observer.observe(work);
    return () => observer.unobserve(work);
  });

  useEffect(() => {
    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting
          ? setTimeout(() => setContactHref(true), 800)
          : setContactHref(false);
      },
      { threshold: 0.8 }
    );
    observer.observe(contact);
    return () => observer.unobserve(contact);
  });

  const navRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      !navRef.current.contains(e.target) ? setOpen(false) : setOpen(true);
    };
    document.addEventListener("touchstart", handleClick);
    return () => document.removeEventListener("touchstart", handleClick);
  });

  return (
    <div
      className={`${style.navbar} ${navStyle ? style.scrolling : ""}`}
      ref={navRef}
    >
      <a
        href="#landing"
        className={`${style.logo} ${navStyle ? style.logoSmall : ""}`}
        aria-label="website logo"
      >
        {}
      </a>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="nav"
        aria-expanded={open}
        className={style.navbtn}
      >
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="sr-only">Menu</span>
      </button>

      <nav className={style.nav} data-visible={open}>
        <ul>
          <li>
            <a
              href="#landing"
              onClick={() => setOpen(!open)}
              className={`${navStyle ? style.linkSmall : ""}
                ${landingHref ? style.active : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setOpen(!open)}
              className={`${navStyle ? style.linkSmall : ""} ${
                servicesHref ? style.active : ""
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={() => setOpen(!open)}
              className={`${navStyle ? style.linkSmall : ""} ${
                workHref ? style.active : ""
              }`}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(!open)}
              className={`${navStyle ? style.linkSmall : ""} ${
                contactHref ? style.active : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
        <Themetoggle />
      </nav>
    </div>
  );
}
