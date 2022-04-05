import React from "react";
import { socials } from "./footer-list";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        {socials.map(({ id, link, icon, alt }) => {
          return (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" alt={alt}>
              {icon}
            </a>
          );
        })}
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Prion 2022. Todos los derechos reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
