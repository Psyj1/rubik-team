// src/components/layout/Header.tsx
import React, { useCallback, useState } from "react";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Sobre", id: "about" },
  { label: "Equipe", id: "members" },
  { label: "Projetos", id: "project" },
  { label: "Contato", id: "contact" },
] as const;

export function Header() {
  const [logoError, setLogoError] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = id;
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="site-header__logo" onClick={scrollToTop} aria-label="Go to top">
          {!logoError ? (
            <img src="/logo.png" alt="Rubik" onError={() => setLogoError(true)} />
          ) : (
            <span className="site-header__logo-fallback">
              <span className="site-header__logo-accent" aria-hidden="true" />
              rubik
            </span>
          )}
        </button>

        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="site-header__nav-item">
                <a
                  className="site-header__nav-link"
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}