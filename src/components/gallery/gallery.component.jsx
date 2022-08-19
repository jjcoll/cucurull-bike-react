import "./gallery.style.scss";
import gal1 from "../../img/helados/helado1.jpg";
import gal2 from "../../img/helados/helado2.jpg";
import gal3 from "../../img/helados/helado3.jpg";
import gal4 from "../../img/helados/helado4.jpg";
import gal5 from "../../img/helados/helado5.jpg";
import gal6 from "../../img/helados/helado6.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

export const Gallery = () => {
  AOS.init({ duration: 2000, offset: 100 });

  return (
    <div id="gallery" className="container gallery mt-6">
      <div className="row mb-4">
        <h2>Helados Unicos y Divertidos</h2>
      </div>
      <div data-aos="fade-left" className="row align-items-center mb-5">
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <div className="gallery-img">
                <img src={gal1} alt="" />
              </div>
            </div>

            <div className="col-6">
              <div className="gallery-img">
                <img src={gal2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 gallery-text mt-3">
          Me preocupa la sostenabilidad y me interesa aplicar prcesos menos
          agresivos en todo lo que hago y especialmente cuidar de donde obtengo
          los producots que utilizo.
        </div>
      </div>
      <div data-aos="fade-right" className="row align-items-center mb-5">
        <div className="col-md-6 gallery-text mt-3 order-md-first order-sm-last order-last">
          Mi helados son de elaboracion artesanal, inspirados en la filosofia Km
          0 y con el concepto Slowfood. Estoy orgullosa de mis raíces
          mallorquinas y de la personalidad de los productos de mi tierra.
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <div className="gallery-img">
                <img src={gal3} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="gallery-img">
                <img src={gal4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="row align-items-center mb-5">
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <div className="gallery-img">
                <img src={gal5} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="gallery-img">
                <img src={gal6} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 gallery-text mt-3">
          Poder ofrecer productos de alta calidad en ambientes familiares y
          amigables con el bolsillo es para mí el verdadero lujo. ¡Asi que ya
          podéis decirme el lugar que yo me encargo del helado!
        </div>
      </div>
    </div>
  );
};
