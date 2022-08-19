import "./contact.style.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  AOS.init({ duration: 2000, offset: 100 });

  return (
    <div className="form-padding">
      <div
        data-aos="fade-up"
        id="contact"
        className="container mt-6 mb-5 contact-form"
      >
        <div className="row">
          <h2>Contactanos</h2>
        </div>
        <form action="" className="row g-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="firstName">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="lastName">
              Apellido
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="div col-md-8">
            <label className="form-label" htmlFor="email">
              Correo
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="div col-md-4">
            <label className="form-label" htmlFor="phone">
              Telefono
            </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="(+34) 622 183 131"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="comment" className="form-label">
              Comentarios, preguntas?
            </label>
            <textarea
              id="comment"
              className="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
