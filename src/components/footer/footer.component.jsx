import { Logo } from "../logo/logo.component";
import "./footer.style.scss";

export const Footer = () => {
  return (
    <footer className="container footer mb-5">
      <div className="row">
        <div className="col-sm-4 col-12 logos">
          <div className="logo-container">
            <Logo></Logo>
            <div className="media">
              <i class="bi bi-instagram media-icon"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
            </div>
          </div>
          <p>Copyright © 2022 by Cucurull, Inc. All rights reserved.</p>
        </div>
        <div className="col-sm-4 col-6  ">
          <ul className="footer-info">
            <li>Contacto</li>
            <li>123 456 789</li>
            <li>cucurull@bike.com</li>
            <li>Palma de Mallorca</li>
          </ul>
        </div>
        <div className="col-sm-4 col-6">
          <ul className="footer-info">
            <li>Helados</li>
            <li>Informacion</li>
            <li>Alergenos</li>
            <li>Imagenes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
