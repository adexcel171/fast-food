import dish1 from "../dish1.png";
import dish2 from "../dish2.png";
import dish3 from "../dish3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SpecialDishes() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section
      className="mt-16 mb-8  font-gilroy py-11 px-4 max-w-6xl mx-auto xl:px-0 "
      data-aos="fade-up"
    >
      <h3
        className={`text-center font-extrabold text-3xl mb-4
          }`}
      >
        Special dishes for you
      </h3>
      <div className="flex flex-col gap-12 lg:flex-row justify-between">
        <article className="max-w-[400px] mx-auto">
          <img
            src={dish1}
            alt="dish1"
            className="max-w-[242px] mx-auto mb-6 h-[242px]"
          />
          <h5 className="text-center font-bold text-2xl  mb-4 ">
            Garlic Salad
          </h5>
          <p className="text-center font-light lg:max-w-[242px] mb-6 ">
            Caprese is a classic Italian salad made with sliced tomatoes.
          </p>
          <button className="w-full bg-[#00A000] text text-white rounded py-2">
            Buy Now
          </button>
        </article>
        <article className="max-w-[400px] mx-auto">
          <img
            src={dish2}
            alt="dish1"
            className="max-w-[220px] mx-auto mb-6 h-[242px]"
          />
          <h5 className="text-center font-bold text-2xl  mb-4 ">
            Garlic Salad
          </h5>
          <p className="text-center font-light lg:max-w-[242px] mb-6 ">
            Caprese is a classic Italian salad made with sliced tomatoes.
          </p>
          <button className="w-full bg-[#00A000] text text-white rounded py-2">
            Buy Now
          </button>
        </article>
        <article className="max-w-[400px] mx-auto">
          <img
            src={dish3}
            alt="dish1"
            className="max-w-[242px] mx-auto mb-6 h-[242px]"
          />
          <h5 className="text-center font-bold text-2xl  mb-4 ">
            Garlic Salad
          </h5>
          <p className="text-center font-light lg:max-w-[242px] mb-6  ">
            Caprese is a classic Italian salad made with sliced tomatoes.
          </p>
          <button className="w-full bg-[#00A000] text text-white rounded py-2">
            Buy Now
          </button>
        </article>
      </div>
    </section>
  );
}

export default SpecialDishes;
