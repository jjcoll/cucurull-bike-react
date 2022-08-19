import "./hero.style.scss";
import heroImg from "../../img/hero-desc/hero-square.webp";

export const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 align-self-center mb-4">
          <h1 className="heading-primary ">
            <span>Cucurull</span> tu bici de helados favorita
          </h1>
        </div>
        <div className="col-md-7 hero-img-box">
          <img src={heroImg} className="fluid hero-img" alt="" />
        </div>
      </div>
    </div>
  );
};
