import { NavBar } from "./components/nav-bar/nav-bar.component";
import { Hero } from "./components/hero/hero.component";
import "./fonts.scss";

/* The following line can be included in your src/index.js or App.js file */

import "./App.scss";
import { AboutUs } from "./components/about-us/about-us.component";
import { Gallery } from "./components/gallery/gallery.component";
import { Testimonials } from "./components/testimonials/testimonials.component";
import { Contact } from "./components/contact/contact.component";
import { Footer } from "./components/footer/footer.component";

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
