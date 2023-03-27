import aboutus from "../Aboutus.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section
      className="mt-16  font-gilroy px-4 max-w-6xl mx-auto xl:px-0 pb-16 flex flex-col gap-8 lg:flex-row lg:justify-between "
      id="service"
    >
      <div data-aos="fade-up">
        <h3 className={`text-center lg:text-left font-extrabold text-3xl mb-4`}>
          About Us
        </h3>
        <p className="text-[#000001]  leading-[1.7] text-center lg:text-left max-w-[474px] mx-auto lg:mx-0">
          The best way to make it works is to have a smart list of all the
          restaurants and cuisines organized by location, type of food (fast
          food, or more gourmet dishes), food preferences (vegetarian, meat
          lovers, any special diets like gluten-free diets), different nation’s
          cuisine, etc.
        </p>

        <div className="max-w-[200px] mx-auto mt-4 lg:mx-0 ">
          <button className="w-full bg-[#00A000] text-white rounded py-2  ">
            Learn more
          </button>
        </div>
      </div>
      <img
        src={aboutus}
        alt=""
        data-aos="zoom-in-down"
        className="w-[80%] max-w-[300px] mx-auto lg:max-w-[500px] xl:max-w-[550px] lg:mx-0"
      />
    </section>
  );
}

export default AboutUs;
