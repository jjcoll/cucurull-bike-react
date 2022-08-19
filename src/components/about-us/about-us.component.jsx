import descImg from "../../img/hero-desc/description.jpg";
import "./about-us.style.scss";

export const AboutUs = () => {
  return (
    <div id="about-us" className="container mt-6 mb-5">
      <div className="row align-items-center about-us">
        <div className="desc-img col-md-7">
          <img src={descImg} alt="" />
        </div>
        <div className="about-us-text col-md-5 order-sm-first order-first order-md-last">
          <h2>Sobre nosotros</h2>
          <p>
            Soy Sandra, dueña de Cucurull Bike un carrito de helados único que
            tiene un diseño innovador, que se adapta a cualquier tipo de evento
            y ocasión. La solución perfecta para servir helados en tus eventos y
            celebraciones.
          </p>
        </div>
      </div>
    </div>
  );
};
