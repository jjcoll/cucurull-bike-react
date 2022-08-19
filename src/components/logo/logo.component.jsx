import out from "../../img/logo/logo-rueda-borde.png";
import inside from "../../img/logo/logo-rueda-dentro2.png";
import "./logo.style.scss";

export const Logo = ({ text }) => {
  if (text) {
    return (
      <div className="logo">
        <div className="logo-img">
          <img src={inside} className="logo-in" alt="" />
          <img src={out} className="logo-out" alt="" />
        </div>
        <p className="logo-text">Cucurull</p>
      </div>
    );
  }
  return (
    <div className="logo-img">
      <img src={inside} className="logo-in" alt="" />
      <img src={out} className="logo-out" alt="" />
    </div>
  );
};
