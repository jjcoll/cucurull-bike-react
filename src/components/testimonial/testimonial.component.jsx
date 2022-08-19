import "./testimonial.style.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const Testimonial = ({ author, title, quote, img, animation }) => {
  AOS.init({ duration: 2000, offset: 200 });

  return (
    <div id="testimonials" data-aos={animation} className="testimonial-padding">
      <div className="row testimonial mb-4 align-items-center">
        <div className="col-md-7">
          <h3>{title}</h3>
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
        </div>
        <div className="col-md-5">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
