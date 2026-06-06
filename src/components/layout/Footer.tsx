import "./Footer.css";

interface FooterLink {
  label: string;
  href: string;
  external: boolean;
  ariaLabel: string;
}

const footerLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Psyj1/rubik-team.git",
    external: true,
    ariaLabel: "Visit Rubik Team on GitHub",
  },
  {
    label: "Email",
    href: "mailto:rubikteam@proton.me",
    external: true,
    ariaLabel: "Send email to Rubik Team",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <ul className="site-footer__link-list" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <li key={link.label} className="site-footer__link-item">
            <a
              className="site-footer__link"
              href={link.href}
              aria-label={link.ariaLabel}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="site-footer__divider" />

      <p className="site-footer__notice">
        © {currentYear} Rubik Team • IoT • Computer Vision • DevOps
      </p>
    </footer>
  );
}