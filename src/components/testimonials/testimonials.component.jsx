import { Testimonial } from "../testimonial/testimonial.component";
import test1 from "../../img/testimonios/boda1.jpg";
// import test2 from "../../img/testimonios/boda2.jpg";
import test3 from "../../img/testimonios/boda3-resize.jpg";

export const Testimonials = () => {
  return (
    <div className="container mt-6">
      <div className="row mb-3">
        <h2>Que piensa la gente</h2>
      </div>
      <Testimonial
        title={"La sorpresa perfecta para tu boda"}
        author={"— Mar Lopez"}
        img={test1}
        quote={
          "Justo lo que deseabamos y como lo habiamos pedido. Su propietaria muy amable nos aconsejo lo mejor y se adapto a nuestro presupuesto. El diseño increible y fue una gran sorpresa para niños y adultos"
        }
        animation="fade-right"
      ></Testimonial>
      <Testimonial
        title={"Boda de plata"}
        author={"— Annette Martinez"}
        img={test3}
        quote={
          "Cucurull bike ha hecho nuestra fiesta aun mas especial! Los invitados han estado encantados con la calidad del helado y el servicio. Absolutamente recomendable!"
        }
        animation="fade-left"
      ></Testimonial>
    </div>
  );
};
